const { Contact } = require("../service/schemas/contact.js");

const paginate = async (page, limit) => {
  const parsePage = parseInt(page);
  const parseLimit = parseInt(limit);
  const skip = (parsePage - 1) * parseLimit;
  const count = await Contact.estimatedDocumentCount();
  const result = await Contact.find().skip(skip).limit(parseLimit);
  const totalPages = Math.ceil(count / parseLimit);

  return { ...result, totalPages };
};

module.exports = { paginate };
