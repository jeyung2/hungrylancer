// 서버 선언
const express = require("express");
const app = express();
// MySQL
const mysql = require("mysql2");
const port = process.env.PORT || 5000;
// 접속정보 획득
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qaz132!@#$",
  port: "3306",
  database: "ReactBoard",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.connect();

const query =
  "SELECT id, image, name, birthday, gender, job " +
  "FROM reactboard.customer;";

app.get("/api/customers", (req, res) => {
  connection.query(query, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
