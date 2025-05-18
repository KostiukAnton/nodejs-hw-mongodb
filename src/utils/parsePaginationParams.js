const parseNumber = (number, defaultVale) => {
  const isString = typeof number === 'string';
  if (!isString) return defaultVale;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return defaultVale;
  }
  return parsedNumber;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;
  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);
  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
