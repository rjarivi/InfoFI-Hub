import { describe, it, expect } from 'vitest';
import { isEndedItem } from '@/lib/end-status';

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
