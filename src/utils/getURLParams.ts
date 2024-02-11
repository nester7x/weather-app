const getURLParams = (url: string, value: string) => {
  const currentParam = url
    .replace('?', '')
    .split('&')
    .find((query) => query.startsWith(value));
  return currentParam ? currentParam.replace(`${value}=`, '') : '';
};

export default getURLParams;
