Google Sheets → InfoFI Hub Projects Sync

Overview
- Keep project entries in a Google Sheet and auto-generate `src/data/projects.generated.json` for the app.
- A Google Apps Script publishes your sheet rows as JSON; a Node script fetches and writes the generated file.

Sheet Structure
- Columns (recommended):
  - `section` (one of `kaito`, `bantr`, `xeet`)
  - `id`, `title`, `description`, `rewardPool`, `participants`, `timeLeft`, `category`, `platform`, `link`
  - Optional: `image`, `logo`, `source`, `referralLink`, `referralCode`, `zealyLink`, `platformLink`, `claimPeriod`, `vestingSchedule`, `distributionPlatform`, `status`
  - `campaignRules` (pipe `|`, semicolon `;`, or newline-separated)
  - Additional fields like `isNew`, `xHandle`, `addedAt`, `joinLabel`, `cta`, `additionalInfo` can be added as their own columns; they will be captured under `additionalData` automatically.

Apps Script (publish JSON)
1) In the Google Sheet, open Extensions → Apps Script and paste:

```js
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName('Projects'); // adjust if needed
  const values = sh.getDataRange().getValues();
  const [header, ...rows] = values;
  const data = rows.map(r => {
    const obj = {};
    header.forEach((h, i) => { obj[String(h).trim()] = r[i]; });
    return obj;
  });
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

2) Deploy → New deployment → Type: Web app → Execute as: Me → Who has access: Anyone → Copy the web app URL.

Local Sync Script
- Configure endpoint and run:
  - `SHEETS_PROJECTS_URL="<YOUR_WEB_APP_URL>" npm run sync:projects`
  - Or: `npm run sync:projects -- --url=<YOUR_WEB_APP_URL>`
- Output: `src/data/projects.generated.json` with structure:

```json
{
  "kaito": [ { /* Project */ } ],
  "bantr": [ { /* Project */ } ],
  "xeet": [ { /* Project */ } ]
}
```

Integration Options
- Option A: Read `projects.generated.json` at runtime and merge with static data.
  - For example, import JSON in `Index.tsx` and prefer generated entries when present.
- Option B: Extend the sync script to update `src/data/projects.ts` directly.
  - Safer to start with JSON and move to direct updates once the sheet stabilizes.

Auto-deploy (optional)
- Use Apps Script to trigger a Netlify build (or GitHub Actions) via webhook on changes.
- In Apps Script, add a POST to your Netlify build hook URL after successful `doGet` or on an onEdit event.

Tips
- `campaignRules` accepts `|`, `;`, or newline separators; the sync script normalizes these.
- Unknown columns are preserved under `additionalData` as strings.
- Ensure `section` is set for every row; unknown sections are skipped.

