var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var bodyparser = require("body-parser");
const { env } = require("process");

var app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen("3000", () => {
  console.log("Server Bağlandı!");
});

// mysql database connection

var db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// check db connection
db.connect((err) => {
  if (err) throw err;
  else {
    console.log("database Bağlandı! ....");
  }
});

// REST API CURD

app.get("/api", (req, res) => {
  res.send("Api Çalışıyor!");
});

// Data Oluşturmak

app.post("/api/create", (req, res) => {
  console.log(req.body);

  // sql query

  let sql = ` INSERT INTO todotbl(id,title)
                VALUES('${req.body.id}','${req.body.title}')
               `;
  // run query

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("data Eklendi.");
  });
});

// Data Okumak

app.get("/api/read", (req, res) => {
  // sql query

  let sql = `SELECT * FROM todotbl`;

  // run query

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Tek Data Okumak

app.get("/api/read/:id", (req, res) => {
  console.log(req.params.id);

  // sql query

  let sql = `SELECT * FROM todotbl
                WHERE id = '${req.params.id}'
                `;

  // run query

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Tek Datayı Update Etmek

app.put("/api/update/:id", (req, res) => {
  console.log(req.params.id);

  // sql query

  let sql = `UPDATE todotbl SET 
                    title = '${req.body.title}'
                    WHERE id = '${req.body.id}'
                    `;
  // run query

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("data Güncellendi");
  });
});

// Tek Data Silmek

app.delete("/api/delete/:id", (req, res) => {
  // sql query

  let sql = `DELETE FROM todotbl 
                WHERE id = '${req.params.id}'
                `;

  //    run query

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("data Silindi");
  });
});
