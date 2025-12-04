// Sync projects data from a Google Sheets (Apps Script) JSON endpoint
// Usage:
//   SHEETS_PROJECTS_URL="https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec" \
//   node scripts/sync-projects-from-sheets.js
// Or: node scripts/sync-projects-from-sheets.js --url=https://...

import fs from 'fs';
import path from 'path';

const urlArg = process.argv.find(a => a.startsWith('--url='));
const SHEETS_URL = urlArg ? urlArg.split('=')[1] : process.env.SHEETS_PROJECTS_URL;

if (!SHEETS_URL) {
  console.error('[sync-projects-from-sheets] Missing Sheets URL. Set SHEETS_PROJECTS_URL or pass --url=...');
  process.exit(1);
}

function splitRules(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean).map(r => String(r).trim()).filter(Boolean);
  const raw = String(value);
  const parts = raw.split(/\n|\r|\|/).map(s => s.trim()).filter(Boolean);
  return parts;
}

function toStringOrUndefined(v) {
  if (v === undefined || v === null) return undefined;
  return String(v);
}

function normalizeRow(row) {
  // Known top-level fields from Project interface
  const project = {
    id: toStringOrUndefined(row.id),
    title: toStringOrUndefined(row.title),
    description: toStringOrUndefined(row.description),
    rewardPool: toStringOrUndefined(row.rewardPool),
    participants: toStringOrUndefined(row.participants),
    timeLeft: toStringOrUndefined(row.timeLeft),
    category: toStringOrUndefined(row.category),
    platform: toStringOrUndefined(row.platform),
    link: toStringOrUndefined(row.link),
    image: toStringOrUndefined(row.image),
    logo: toStringOrUndefined(row.logo),
    source: toStringOrUndefined(row.source),
    referralLink: toStringOrUndefined(row.referralLink),
    referralCode: toStringOrUndefined(row.referralCode),
    zealyLink: toStringOrUndefined(row.zealyLink),
    platformLink: toStringOrUndefined(row.platformLink),
    campaignRules: splitRules(row.campaignRules),
    claimPeriod: toStringOrUndefined(row.claimPeriod),
    vestingSchedule: toStringOrUndefined(row.vestingSchedule),
    distributionPlatform: toStringOrUndefined(row.distributionPlatform),
    status: toStringOrUndefined(row.status),
    additionalData: {}
  };

  // Collect any extra fields into additionalData, excluding known keys
  const knownKeys = new Set(Object.keys(project).concat(['section']));
  for (const [k, v] of Object.entries(row)) {
    if (!knownKeys.has(k) && v !== undefined && v !== null) {
      project.additionalData[k] = String(v);
    }
  }

  // Clean empty additionalData
  if (project.additionalData && Object.keys(project.additionalData).length === 0) {
    delete project.additionalData;
  }

  return project;
}

function groupBySection(rows) {
  const out = { kaito: [], bantr: [], xeet: [] };
  for (const r of rows) {
    const section = (r.section || '').toLowerCase();
    if (section === 'kaito') out.kaito.push(normalizeRow(r));
    else if (section === 'bantr') out.bantr.push(normalizeRow(r));
    else if (section === 'xeet') out.xeet.push(normalizeRow(r));
    else {
      // Drop unknown sections; could be extended later
      console.warn(`[sync] Skipping row with unknown section: ${r.section}`);
    }
  }
  return out;
}

async function main() {
  console.log(`[sync-projects-from-sheets] Fetching: ${SHEETS_URL}`);
  const res = await fetch(SHEETS_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch Sheets JSON: ${res.status} ${res.statusText}`);
  }
  let json = await res.json();

  // Normalize common shapes
  let grouped;
  if (Array.isArray(json)) {
    grouped = groupBySection(json);
  } else if (json && (json.kaito || json.bantr || json.xeet)) {
    grouped = {
      kaito: Array.isArray(json.kaito) ? json.kaito.map(normalizeRow) : [],
      bantr: Array.isArray(json.bantr) ? json.bantr.map(normalizeRow) : [],
      xeet: Array.isArray(json.xeet) ? json.xeet.map(normalizeRow) : []
    };
  } else if (json && Array.isArray(json.rows)) {
    grouped = groupBySection(json.rows);
  } else {
    throw new Error('Unrecognized JSON format. Expected top-level arrays, an array of rows, or {rows:[]}.');
  }

  // Write generated JSON file for use by the app or further processing
  const outPath = path.join(process.cwd(), 'src', 'data', 'projects.generated.json');
  fs.writeFileSync(outPath, JSON.stringify(grouped, null, 2), 'utf-8');

  console.log(`[sync] Wrote ${outPath}`);
  console.log(`[sync] Counts — kaito: ${grouped.kaito.length}, bantr: ${grouped.bantr.length}, xeet: ${grouped.xeet.length}`);
}

main().catch(err => {
  console.error('[sync-projects-from-sheets] Error:', err);
  process.exit(1);
});

