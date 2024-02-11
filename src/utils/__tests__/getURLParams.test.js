import getURLParams from '../getURLParams';

describe('getURLParams', () => {
  test('returns correct url param value', () => {
    const searchParams = '?category=electronics&page=1';
    const searchValue = 'page';
    expect(getURLParams(searchParams, searchValue)).toBe('1');
  });

  test('returns an empty string if searchParams is empty', () => {
    const searchParams = '';
    const searchValue = '';
    expect(getURLParams(searchParams, searchValue)).toBe('');
  });
});
