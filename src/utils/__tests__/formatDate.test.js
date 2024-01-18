import formatDate from '../formatDate';

describe('formatDate', () => {
  test('returns a correct value', () => {
    const date = '2024-01-18 13:00';
    expect(formatDate(date)).toBe('13:00 - Thursday, 18 Jan 24');
  });

  test('returns an error', () => {
    const date = '2024--18 13:00:1';
    expect(formatDate(date)).toBe('NaN:NaN - Invalid Date, NaN Invalid Date N');
  });

  test('returns an empty string', () => {
    const emptyValues = [undefined, '', null];
    emptyValues.map((value) => {
      expect(formatDate(value)).toBe('');
    });
  });
});
