export interface LabelChangeEntry {
  id: string;
  title?: string;
  fromIsNew: boolean;
  toIsNew: boolean;
  addedAt?: string;
  timestamp: string; // ISO
}

export const DEFAULT_NEW_WINDOW_DAYS = 21; // configurable window for "new"

// Compute whether an item should be considered NEW based on addedAt and window
export function computeIsNew(additionalData: any, now: Date = new Date(), windowDays: number = DEFAULT_NEW_WINDOW_DAYS): boolean {
  const explicit = additionalData?.isNew === "true";
  const addedAtStr = additionalData?.addedAt as string | undefined;

  if (addedAtStr) {
    const addedAt = new Date(addedAtStr);
    if (!isNaN(addedAt.getTime())) {
      const msWindow = windowDays * 24 * 60 * 60 * 1000;
      return now.getTime() - addedAt.getTime() <= msWindow;
    }
  }

  // Fallback: if no addedAt, keep existing explicit flag
  return explicit;
}

// Update an array of projects' isNew flags, returning updated array and change log
export function updateItemsNewLabel<T extends { id: string; title?: string; additionalData?: any }>(
  items: T[],
  now: Date = new Date(),
  windowDays: number = DEFAULT_NEW_WINDOW_DAYS
): { updated: T[]; changes: LabelChangeEntry[] } {
  const changes: LabelChangeEntry[] = [];

  const updated = items.map((item) => {
    const currentFlag = item.additionalData?.isNew === "true";
    const computed = computeIsNew(item.additionalData, now, windowDays);

    if (currentFlag !== computed) {
      changes.push({
        id: item.id,
        title: item.title,
        fromIsNew: currentFlag,
        toIsNew: computed,
        addedAt: item.additionalData?.addedAt,
        timestamp: new Date().toISOString(),
      });
    }

    // Preserve other labels; only set isNew accordingly
    return {
      ...item,
      additionalData: {
        ...item.additionalData,
        isNew: computed ? "true" : "false",
      },
    };
  });

  return { updated, changes };
}

// Persist label change log to localStorage for audit purposes
export function logLabelChanges(changes: LabelChangeEntry[]): void {
  if (!changes.length) return;
  try {
    const key = "label-change-log";
    const existingRaw = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    const next = existing.concat(changes);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(next));
    }
    // Also emit to console for immediate observability
    // eslint-disable-next-line no-console
    console.info("Label changes", changes);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("Failed to persist label changes", e);
  }
}

