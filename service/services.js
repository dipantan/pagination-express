// Model file
var model = require("../models/models.js");

// db Configuration
let findRecords = async (req) => {
  return model.findAndCountAll({
    offset: req.offset,
    limit: req.limit,
  });
};
module.exports = { findRecords: findRecords };
