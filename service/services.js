// Model file
var model = require("../models/models.js");

// db Configuration
let findRecords = async (req) => {
  //Find all the rows matching your query, within a specified offset / limit, and get the total number of rows matching your query.
  return model.findAndCountAll({
    offset: req.offset,
    limit: req.limit,
  });
};
module.exports = { findRecords: findRecords };
