/*


react-dom.development.js:86 Warning: You provided a `value` prop to a
 form field
 without an `onChange` handler. This will render a read-only field. 
 If the field should be mutable use `defaultValue`. Otherwise, 
 set either `onChange` or `readOnly`.
    at input
    at form
    at CustomerAdd (http://localhost:3000/static/js/bundle.js:283:5)
    at div
    at App (http://localhost:3000/static/js/bundle.js:70:5)
    at WithStyles (http://localhost:3000/static/js/bundle.js:4243:31)

// 서버 선언
const express = require("express");
const app = express();
// MySQL
const mysql = require("mysql2");
const port = process.env.PORT || 5000;
// 접속정보 획득
const fs = require("fs");
const data = fs.read("./database.json");
const conf = JSON.parse(data);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
  waitForConnections: conf.waitForConnections,
  connectionLimit: conf.connectionLimit,
  queueLimit: conf.queueLimit,
});

connection.connect();

app.get("/api/select", (req, res) => {
  connection.query("SELECT user_id, user_name FROM NewTable;"),
    (err, rows, fields) => {
      res.send(rows);
    };
});

app.listen(port, () => console.log(`Listening on port ${port}`));


// 서버 선언
const express = require("express");
const app = express();
// MySQL
const mysql = require("mysql2");
const port = process.env.PORT || 5000;
// 접속정보 획득
const fs = require("fs");
const data = fs.read("./database.json");
const conf = JSON.parse(data);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
  waitForConnections: conf.waitForConnections,
  connectionLimit: conf.connectionLimit,
  queueLimit: conf.queueLimit,
});

app.get("/api/select", (req, res) => {
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));

  const result = {};

  async function main(req, res) {
    const promisePool = pool.promise();
    // query database using promises
    result.push("test"); //await promisePool.query("SELECT user_id FROM react.NewTable;");
    //return "test"; // JSON.stringify(result);
  }
  return res.send({ message: result });
  //return res.send(JSON.stringify(result.toString()));


const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require("mysql");
//const mysql2 = require("mysql2/promise");

app.get("/api/select", (req, res) => {
  return main();
});

async function main() {
  // Create the connection pool. The pool-specific settings are the defaults
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "qaz132!@#$",
    port: "3306",
    database: "react",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  const promisePool = pool.getConnection();
  const [results, fields] = await pool.execute(query, [parameter1]);
  const [rows] = promisePool.query("SELECT user_id, user_name FROM NewTable;");
  return res.send({ message: [rows] });
}

app.listen(port, () => console.log(`Listening on port ${port}`));





const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

//const data = fs.read("./database.json");
//const conf = JSON.parse(data);
const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
//const dbConfig = fs.readFileSync("./dbConfig.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function getSelection(req, res) {}

app.get("/api/select", (req, res) => {
  const resultStr = "";
  let connection;

  try {
    connection = oracledb.getConnection({
      user: "c##react",
      password: "1234",
      connectString:
        "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = orcl)))",
    });

    const query = "select sysdate from dual where 1=:num";
    const result = await connection.execute(query, [1]);

    if (result) {
      resultStr = JSON.stringify(result.rows);
    } else {
      resultStr = "결과없음";
    }
  } catch (error) {
    return res.send({ message: error.message });
  } finally {
    if (connection) {
      try {
        connection.close();
      } catch (error) {
        return res.send({ message: error.message });
      }
    }
  }
  return res.send({ message: resultStr });
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://picsum.photos/200/300?random=1",
      name: "홍길동1",
      birthday: "123456",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300?random=2",
      name: "박제영1",
      birthday: "711123",
      gender: "남자",
      job: "프리랜서",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300?random=3",
      name: "박현지1",
      birthday: "111221",
      gender: "여자",
      job: "중학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express");
const app = express();
const mysql = require("mysql");
//const port = process.env.PORT || 5000;
//const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qaz132!@#$",
  port: "3306",
  database: "react",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const connection = await pool.getConnection(async (conn) => conn);

try {
  await connection.beginTransaction();
  await connection.query("SELECT user_id, user_name FROM NewTable;");
  await connection.commit();
  console.log("success!");
} catch (err) {
  await connection.rollback();
  throw err;
} finally {
  connection.release();
}

//app.listen(port, () => console.log(`Listening on port ${port}`));

  */
