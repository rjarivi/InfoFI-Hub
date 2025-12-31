export interface EndableItem {
  status?: 'active' | 'ended';
  timeLeft?: string;
  additionalData?: {
    endsAt?: string;
    startsAt?: string;
    [key: string]: string | undefined;
  };
}

function tryParseIsoDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return isNaN(d.getTime()) ? undefined : d;
}

function parseEndDateFromTimeLeft(timeLeft?: string): Date | undefined {
  if (!timeLeft) return undefined;

  const normalized = timeLeft.trim();
  if (normalized.toUpperCase() === 'ENDED') return undefined;

  const parts = normalized.split('-');
  if (parts.length !== 2) return undefined;

  const endPart = parts[1].trim();
  if (!endPart || /^(TBD|ONGOING|OPEN)$/i.test(endPart)) return undefined;

  const endDate = new Date(endPart);
  if (isNaN(endDate.getTime())) return undefined;

  // Make range inclusive by setting to end-of-day
  endDate.setHours(23, 59, 59, 999);
  return endDate;
}

function parseStartDateFromTimeLeft(timeLeft?: string): Date | undefined {
  if (!timeLeft) return undefined;

  const normalized = timeLeft.trim();
  const parts = normalized.split('-');
  if (parts.length !== 2) return undefined;

  const startPart = parts[0].trim()
    .replace(/^Started:\s*/i, '')
    .replace(/Season\s*\d+:/i, '')
    .replace(/Phase\s*\d+:/i, '');

  if (!startPart || /^(TBD|TBA|ONGOING|OPEN)$/i.test(startPart)) return undefined;

  // If the start part lacks a year but the end part has it, borrow the end year
  const endPart = parts[1].trim();
  const endHasYear = /\d{4}/.test(endPart);
  const startHasYear = /\d{4}/.test(startPart);

  let maybeStart: Date;
  if (startHasYear) {
    maybeStart = new Date(startPart);
  } else if (endHasYear) {
    const endYear = Number(endPart.match(/\d{4}/)?.[0]);
    // Try with borrowed end year first
    const withEndYear = new Date(`${startPart}, ${endYear}`);
    if (!isNaN(withEndYear.getTime())) {
      // If start month is after end month in same year, roll start back one year
      const endDateTmp = new Date(endPart);
      if (!isNaN(endDateTmp.getTime())) {
        const startMonth = withEndYear.getMonth();
        const endMonth = endDateTmp.getMonth();
        if (startMonth > endMonth) {
          const rolled = new Date(`${startPart}, ${endYear - 1}`);
          maybeStart = isNaN(rolled.getTime()) ? withEndYear : rolled;
        } else {
          maybeStart = withEndYear;
        }
      } else {
        maybeStart = withEndYear;
      }
    } else {
      maybeStart = withEndYear;
    }
  } else {
    maybeStart = new Date(startPart);
  }
  if (isNaN(maybeStart.getTime())) return undefined;
  return maybeStart;
}

function toYMD(date?: Date): string | undefined {
  if (!date) return undefined;
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Determines whether an item should be considered ended
export function isEndedItem(item: EndableItem, now: Date = new Date()): boolean {
  if (!item) return false;

  const byStatus = item.status === 'ended' || item.timeLeft?.trim().toUpperCase() === 'ENDED';

  const byEndsAt = (() => {
    const endsAt = tryParseIsoDate(item.additionalData?.endsAt);
    if (!endsAt) return false;
    return endsAt.getTime() <= now.getTime();
  })();

  const byParsedTimeLeft = (() => {
    const parsed = parseEndDateFromTimeLeft(item.timeLeft);
    if (!parsed) return false;
    return parsed.getTime() <= now.getTime();
  })();

  return byStatus || byEndsAt || byParsedTimeLeft;
}

export function formatPeriodYMD(item: EndableItem): string {
  const start = tryParseIsoDate(item.additionalData?.startsAt) ?? parseStartDateFromTimeLeft(item.timeLeft);
  const end = tryParseIsoDate(item.additionalData?.endsAt) ?? parseEndDateFromTimeLeft(item.timeLeft);

  if (!start && !end && item.timeLeft) {
    return item.timeLeft;
  }

  const startStr = toYMD(start) ?? 'Unknown';
  const endStr = end ? toYMD(end) : (item.timeLeft?.match(/TBD|TBA|ONGOING/i) ? 'TBD' : 'Unknown');
  return `${startStr} to ${endStr}`;
}

export function getDaysLeft(item: EndableItem, now: Date = new Date()): number | undefined {
  const end = tryParseIsoDate(item.additionalData?.endsAt) ?? parseEndDateFromTimeLeft(item.timeLeft);
  if (!end) return undefined;

  const startOfDayUtc = (d: Date) => new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const endUtc = startOfDayUtc(end);
  const nowUtc = startOfDayUtc(now);

  const diffMs = endUtc.getTime() - nowUtc.getTime();
  if (diffMs <= 0) return 0;
  const dayMs = 1000 * 60 * 60 * 24;
  return Math.ceil(diffMs / dayMs);
}

export function getStatusWithDays(item: EndableItem, t?: (k: string) => string, now: Date = new Date()): string {
  const ended = isEndedItem(item, now);
  if (ended) return t ? t('ended') : 'Ended';

  const days = getDaysLeft(item, now);
  if (typeof days === 'number' && days > 0) {
    const activeLabel = t ? t('active') : 'Active';
    return `${activeLabel} (${days} days left)`;
  }
  return t ? t('active') : 'Active';
}

export const __internal = { parseEndDateFromTimeLeft, parseStartDateFromTimeLeft, toYMD };
