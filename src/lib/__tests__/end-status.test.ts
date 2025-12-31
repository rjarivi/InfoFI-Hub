import { describe, it, expect } from 'vitest';
import { isEndedItem, formatPeriodYMD, getDaysLeft, getStatusWithDays } from '@/lib/end-status';

const now = new Date('2025-12-04T12:00:00Z');

describe('isEndedItem', () => {
  it('returns true when status is ended', () => {
    expect(isEndedItem({ status: 'ended' }, now)).toBe(true);
  });

  it('returns true when timeLeft is ENDED', () => {
    expect(isEndedItem({ timeLeft: 'ENDED' }, now)).toBe(true);
  });

  it('returns true when endsAt is in the past', () => {
    expect(isEndedItem({ additionalData: { endsAt: '2025-12-01T00:00:00Z' } }, now)).toBe(true);
  });

  it('returns false when endsAt is in the future', () => {
    expect(isEndedItem({ additionalData: { endsAt: '2026-01-01T00:00:00Z' } }, now)).toBe(false);
  });

  it('returns false when no status, timeLeft, or endsAt present', () => {
    expect(isEndedItem({}, now)).toBe(false);
  });

  it('handles invalid endsAt value gracefully', () => {
    expect(isEndedItem({ additionalData: { endsAt: 'not-a-date' } }, now)).toBe(false);
  });

  it('returns true when timeLeft range has end date in past', () => {
    expect(
      isEndedItem({ timeLeft: 'Oct 28, 2025 - Nov 30, 2025' }, now)
    ).toBe(true);
  });

  it('returns false when timeLeft range ends in future', () => {
    expect(
      isEndedItem({ timeLeft: 'Nov 15, 2025 - Jan 15, 2026' }, now)
    ).toBe(false);
  });

  it('returns false when timeLeft range has TBD end', () => {
    expect(
      isEndedItem({ timeLeft: 'Oct 31, 2025 - TBD' }, now)
    ).toBe(false);
  });
});

describe('Time Period formatting and days left', () => {
  it('formats period in YMD from timeLeft range', () => {
    const item = { timeLeft: 'Nov 15, 2025 - Jan 15, 2026' };
    expect(formatPeriodYMD(item)).toBe('2025-11-15 to 2026-01-15');
  });

  it('borrows end year when start year missing', () => {
    const item = { timeLeft: 'Oct 28 - Nov 30, 2025' };
    expect(formatPeriodYMD(item)).toBe('2025-10-28 to 2025-11-30');
  });

  it('returns TBD when end is TBD', () => {
    const item = { timeLeft: 'Oct 31, 2025 - TBD' };
    expect(formatPeriodYMD(item)).toBe('2025-10-31 to TBD');
  });

  it('calculates days left from endsAt', () => {
    const item = { additionalData: { endsAt: '2026-01-01T00:00:00Z' } };
    expect(getDaysLeft(item, now)).toBe(28);
  });

  it('returns status with days when active', () => {
    const item = { status: 'active' as const, timeLeft: 'Nov 15, 2025 - Jan 15, 2026' };
    const status = getStatusWithDays(item, undefined, now);
    expect(status).toBe('Active (42 days left)');
  });

  it('correctly handles year rollover when start month > end month', () => {
    const item = { timeLeft: 'Dec 01 - Jan 01, 2026' };
    expect(formatPeriodYMD(item)).toBe('2025-12-01 to 2026-01-01');
  });

  it('correctly handles same year when start month < end month', () => {
    const item = { timeLeft: 'Jan 01 - Mar 01, 2026' };
    expect(formatPeriodYMD(item)).toBe('2026-01-01 to 2026-03-01');
  });
});
