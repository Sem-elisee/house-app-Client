const {
  getAllData,
  insertData,
  modifyData,
  deleteData,
} = require("../config/controllerconfig");

const getCustomer = (req, res) => {
  const query = "SELECT * from customer";
  getAllData(query, res);
};

const postCustomer = (req, res) => {
  const { Name, LastName, Email, Phone, Dates, Address } = req.body;

  const query =
    "INSERT INTO customer (Name, LastName, Email, Phone, Dates, Address) VALUES (?, ?, ?, ?, ?, ?)";
  insertData(query, [Name, LastName, Email, Phone, Dates, Address], res);
};
const putCustomer = (req, res) => {
  const { Name, LastName, Email, Phone, Dates, Address } = req.body;
  const IDCustomer = req.params.id;
  const query =
    "UPDATE customer SET Name=?,LastName=?,Email=?,Phone=?,Dates=?,Address=? WHERE IDCustomer =?";
  modifyData(
    query,
    [Name, LastName, Email, Phone, Dates, Address, IDCustomer],
    res
  );
};

const deleteCustomer = (req, res) => {
  const IDCustomer = req.params.id;
  const query = "DELETE FROM customer WHERE IDCustomer=?";
  deleteData(query, [IDCustomer], res);
};

module.exports = {
  getCustomer,
  postCustomer,
  putCustomer,
  deleteCustomer,
};
