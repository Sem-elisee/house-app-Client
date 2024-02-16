const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fenisha",
});

const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.error(
        "Erreur de la connexion a la base de donnees " + err.message
      );
    } else {
      console.log("connexion successful");
    }
  });
};

module.exports = {
  connectDB,
  db,
};
