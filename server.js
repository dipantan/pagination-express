//Required External modules
const express = require("express");
const path = require("path");
require("dotenv").config();
const paginate = require("express-paginate");

//Required code files
const services = require("./service/services.js");

//Application Variables
const app = express();
const port = process.env.SV_PORT || 3000;

//Server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

//Configuration
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(paginate.middleware(10, 50)); // 10 is the default value for limit, 50 is the maximum number of items per page allowed by the server (optional)

//Routes
app.get("/", (req, res) => {
  const limit = req.query.limit || 10;
  const currentPage = req.query.page || 1; // to get the current page number from the query string. If the query string is empty, page will be 1 by default.

  const offset = req.offset; //req.offset is provided by express-paginate middleware and is calculated based on the current page and the number of items per page. It is equivalent to (page - 1) * limit. For example, if you are on page 3 and have 10 items per page, req.offset would be 20. This is the offset you would use in your SQL query to retrieve the correct records for the current page. If you are on page 1, req.offset would be 0. If you are on page 2, req.offset would be 10.   const page = req.query.page || 1;

  services.findRecords({ offset: offset, limit: limit }).then((results) => {
    const itemCount = results.count; // results.count is the total number of items in the database.
    const pageCount = Math.ceil(itemCount / limit); // pageCount is the total number of items on the current page.

    // res.send(results.rows); // to send json response
    res.render("paginatedView", {
      data: results.rows, // results.rows is an array of records retrieved from the database. This is the array you would use in your pug template to display the records on the page.
      pageCount,
      itemCount,
      limit,
      offset,
      currentPage,
      pages: paginate.getArrayPages(req)(3, pageCount, req.query.page), // to get an array of page numbers to display in the pagination control. The first parameter is the number of pages to display on either side of the current page. The second parameter is the total number of pages. The third parameter is the current page number. The function returns an array of page numbers to display in the pagination control.
    });
  });
});
