import backgroundCheck from '../backgroundCheck';

describe('backgroundCheck', () => {
  test('returns night background for midnight', () => {
    const time = '2023-01-01T00:00:00';
    expect(backgroundCheck(time)).toBe('45deg, #0c1443, #283586');
  });

  test('returns morning background for 8 AM', () => {
    const time = '2023-01-01T08:00:00';
    expect(backgroundCheck(time)).toBe('45deg, #fbc02d, #ffd95b');
  });

  test('returns day background for 2 PM', () => {
    const time = '2023-01-01T14:00:00';
    expect(backgroundCheck(time)).toBe('45deg, #2193b0, #6dd5ed');
  });

  test('returns evening background for 8 PM', () => {
    const time = '2023-01-01T20:00:00';
    expect(backgroundCheck(time)).toBe('45deg, #ff6b6b, #ffa07a');
  });

  test('returns an empty string if the time is not specified', () => {
    const time = '';
    expect(backgroundCheck(time)).toBe('');
  });
});
