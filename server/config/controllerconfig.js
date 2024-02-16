const { db } = require("../database/connect");

const getAllData = (query, res) => {
  db.query(query, (err, result) => {
    if (err) {
      console.error(err, "error when retrieving data");
      res.status(500).json({
        error: "error when retrieving data",
      });
    } else {
      res.json(result);
    }
  });
};

const insertData = (query, arrayData, res) => {
  db.query(query, arrayData, (err, result) => {
    // console.error(err, "error when inserting data");
    if (err) {
      res.status(500).json({
        error: "error when inserting data",
      });
    } else {
      res.json(result);
    }
  });
};

const modifyData = (query, arrayData, res) => {
  db.query(query, arrayData, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "error when modifying data",
      });
    } else {
      res.json(result);
    }
  });
};

const deleteData = (query, arrayData, res) => {
  db.query(query, arrayData, (err, result) => {
    if (err) {
      console.error("error when deleting data");
      res.status(500).json({
        error: "error when deleting data",
      });
    } else {
      res.json(result);
    }
  });
};

module.exports = {
  getAllData,
  insertData,
  modifyData,
  deleteData,
};
