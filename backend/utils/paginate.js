const { PAGE_NUMBER_DEFAULT, PER_PAGE } = require("../constants");

const paginate = (data, page = PAGE_NUMBER_DEFAULT, perPage = PER_PAGE) => {
  page = parseInt(page);
  perPage = parseInt(perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return data.slice(startIndex, endIndex);
};

module.exports = { paginate };
