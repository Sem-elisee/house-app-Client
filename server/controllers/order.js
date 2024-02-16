const {
  getAllData,
  insertData,
  modifyData,
  deleteData,
} = require("../config/controllerconfig");

const getOrder = (req, res) => {
  const query = "SELECT * FROM orders";
  getAllData(query, res);
};

const postOrder = (req, res) => {
  const {
    OrderCustomer,
    Orders,
    OrderDeliveryDate,
    OrderPrice,
    OrderPhone,
    OrderAddress,
    Orderpayment,
    OrderStatus,
  } = req.body;

  const query =
    "INSERT INTO orders (OrderCustomer,Orders,OrderDeliveryDate,OrderPrice,OrderPhone,OrderAddress,Orderpayment,OrderStatus) VALUES(?,?,?,?,?,?,?,?)";

  insertData(
    query,
    [
      OrderCustomer,
      Orders,
      OrderDeliveryDate,
      OrderPrice,
      OrderPhone,
      OrderAddress,
      Orderpayment,
      OrderStatus,
    ],
    res
  );
};

const putOrder = (req, res) => {
  const {
    OrderCustomer,
    Orders,
    OrderDeliveryDate,
    OrderPrice,
    OrderPhone,
    OrderAddress,
    Orderpayment,
    OrderStatus,
  } = req.body;

  const OrderID = req.params.id;
  const query =
    "UPDATE orders SET OrderCustomer=?, Orders=?,OrderDeliveryDate=?,OrderPrice=?,OrderPhone=?,OrderAddress=?,Orderpayment=?,OrderStatus=? WHERE OrderID =?";

  modifyData(
    query,
    [
      OrderCustomer,
      Orders,
      OrderDeliveryDate,
      OrderPrice,
      OrderPhone,
      OrderAddress,
      Orderpayment,
      OrderStatus,
      OrderID,
    ],
    res
  );
};

const deleteOrder = (req, res) => {
  const query = "DELETE FROM orders WHERE OrderID =?";
  const OrderID = req.params.id;
  deleteData(query, [OrderID], res);
};

module.exports = {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
};
