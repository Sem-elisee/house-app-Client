const express = require("express");
const app = express();
const { connectDB } = require("./database/connect");
const port = 2003;
const cors = require("cors");

const customer = require("./routes/customer.routes");
const supplierPhysics = require("./routes/supplierphysics.routes");

app.use(express.json());
app.use(cors());

app.use("/api/v.01/customer", customer);
app.use("/api/v.01/supplierPhysics", supplierPhysics);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`le server est actif au port: ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
