import { describe, it, expect } from 'vitest';
import { computeIsNew, updateItemsNewLabel, DEFAULT_NEW_WINDOW_DAYS } from '@/lib/new-label-manager';

const daysAgo = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
};

describe('computeIsNew', () => {
  it('returns true when addedAt is within window', () => {
    const additionalData = { addedAt: daysAgo(5), isNew: 'false' };
    expect(computeIsNew(additionalData)).toBe(true);
  });

  it('returns false when addedAt is outside window', () => {
    const additionalData = { addedAt: daysAgo(DEFAULT_NEW_WINDOW_DAYS + 5), isNew: 'true' };
    expect(computeIsNew(additionalData)).toBe(false);
  });

  it('falls back to explicit flag when addedAt is missing', () => {
    expect(computeIsNew({ isNew: 'true' })).toBe(true);
    expect(computeIsNew({ isNew: 'false' })).toBe(false);
  });
});

describe('updateItemsNewLabel', () => {
  it('updates isNew flag and preserves other labels', () => {
    const items = [
      { id: 'a', title: 'A', additionalData: { addedAt: daysAgo(1), isNew: 'false', other: 'x' } },
      { id: 'b', title: 'B', additionalData: { addedAt: daysAgo(DEFAULT_NEW_WINDOW_DAYS + 1), isNew: 'true', other: 'y' } },
      { id: 'c', title: 'C', additionalData: { isNew: 'true', other: 'z' } },
    ];

    const { updated, changes } = updateItemsNewLabel(items);

    // A should become new
    expect(updated[0].additionalData.isNew).toBe('true');
    // B should no longer be new
    expect(updated[1].additionalData.isNew).toBe('false');
    // C should stay new (no addedAt, fallback to explicit)
    expect(updated[2].additionalData.isNew).toBe('true');
    // Other labels preserved
    expect(updated[0].additionalData.other).toBe('x');

    // Changes include A (false->true) and B (true->false)
    const ids = changes.map(c => c.id).sort();
    expect(ids).toEqual(['a', 'b']);
  });
});

describe('performance', () => {
  it('processes 10k items under reasonable time', () => {
    const count = 10_000;
    const now = new Date();
    const items = Array.from({ length: count }, (_, i) => ({
      id: `id-${i}`,
      title: `Title ${i}`,
      additionalData: {
        addedAt: i % 2 === 0 ? daysAgo(10) : daysAgo(DEFAULT_NEW_WINDOW_DAYS + 10),
        isNew: i % 3 === 0 ? 'true' : 'false',
        labelX: 'keep',
      },
    }));

    const start = performance.now();
    const { updated } = updateItemsNewLabel(items, now);
    const duration = performance.now() - start;

    expect(updated.length).toBe(count);
    // Under 300ms on typical dev machine; adjust if needed
    expect(duration).toBeLessThan(300);
  });
});

