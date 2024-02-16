const {
  getAllData,
  insertData,
  modifyData,
  deleteData,
} = require("../config/controllerconfig");

const getSupplierPhysics = (req, res) => {
  const query = "SELECT * FROM  supplierphysics";
  getAllData(query, res);
};

const postSupplierPhysics = (req, res) => {
  const {
    IdentificationDoc,
    SupplierPhysicsName,
    SupplierPhysicsLastname,
    SupplierPhysicsSalary,
    SupplierPhysicsEmail,
    SupplierPhysicsPhone,
    SupplierPhysicsDate,
    SupplierPhysicsAddress,
  } = req.body;

  const query =
    "INSERT INTO supplierphysics (IdentificationDoc,SupplierPhysicsName,SupplierPhysicsLastname,SupplierPhysicsSalary,SupplierPhysicsEmail,SupplierPhysicsPhone,SupplierPhysicsDate,SupplierPhysicsAddress) VALUES(?,?,?,?,?,?,?,?)";

  insertData(
    query,
    [
      IdentificationDoc,
      SupplierPhysicsName,
      SupplierPhysicsLastname,
      SupplierPhysicsSalary,
      SupplierPhysicsEmail,
      SupplierPhysicsPhone,
      SupplierPhysicsDate,
      SupplierPhysicsAddress,
    ],
    res
  );
};

const putsupplierphysics = (req, res) => {
  const {
    IdentificationDoc,
    SupplierPhysicsName,
    SupplierPhysicsLastname,
    SupplierPhysicsSalary,
    SupplierPhysicsEmail,
    SupplierPhysicsPhone,
    SupplierPhysicsDate,
    SupplierPhysicsAddress,
  } = req.body;
  const IDSupplierPhysics = req.params.id;
  const query =
    "UPDATE supplierphysics SET IdentificationDoc=?, SupplierPhysicsName=?,SupplierPhysicsLastname=?,SupplierPhysicsSalary=?,SupplierPhysicsEmail=?,SupplierPhysicsPhone=?, SupplierPhysicsDate=?,SupplierPhysicsAddress=? WHERE IDSupplierPhysics =? ";
  modifyData(
    query,
    [
      IdentificationDoc,
      SupplierPhysicsName,
      SupplierPhysicsLastname,
      SupplierPhysicsSalary,
      SupplierPhysicsEmail,
      SupplierPhysicsPhone,
      SupplierPhysicsDate,
      SupplierPhysicsAddress,
      IDSupplierPhysics,
    ],
    res
  );
};

const deletesupplierphysics = (req, res) => {
  const query = "DELETE FROM supplierphysics WHERE IDSupplierPhysics=?";
  const IDSupplierPhysics = req.params.id;
  deleteData(query, [IDSupplierPhysics], res);
};

module.exports = {
  getSupplierPhysics,
  postSupplierPhysics,
  putsupplierphysics,
  deletesupplierphysics,
};
