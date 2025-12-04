export interface EndableItem {
  status?: 'active' | 'ended';
  timeLeft?: string;
  additionalData?: {
    endsAt?: string;
    [key: string]: any;
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

export const __internal = { parseEndDateFromTimeLeft };
