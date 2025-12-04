export interface EndableItem {
  status?: 'active' | 'ended';
  timeLeft?: string;
  additionalData?: {
    endsAt?: string;
    [key: string]: any;
  };
}

// Determines whether an item should be considered ended
export function isEndedItem(item: EndableItem, now: Date = new Date()): boolean {
  const byStatus = item.status === 'ended' || item.timeLeft === 'ENDED';

  const endsAtStr = item.additionalData?.endsAt;
  const byEndsAt = (() => {
    if (!endsAtStr) return false;
    const end = new Date(endsAtStr);
    return !isNaN(end.getTime()) && end.getTime() <= now.getTime();
  })();

  return byStatus || byEndsAt;
}

