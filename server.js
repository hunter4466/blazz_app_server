const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');

const app = express();

/* ---------------------------USOS----------------------------------------*/
app.set('view engine', 'ejs');
app.set('views', './build');
app.use(session({
  secret: 'token-muy-secreto', key: 'sid', resave: true, saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}/build`));
/* ---------------------------CONEXIONES----------------------------------------*/
// var pool = mysql.createPool({
//     connectionLimit: 1000,
//     host:'localhost',
//     user: 'ps6dng7z1bo2',
//     password: 'jf7l2p93lI',
//     database: 'makit_software',
//     multipleStatements: 'true'})

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blaz_app',
  multipleStatements: 'true',
});

/* ---------------------------MAILER----------------------------------------*
/*---------------------------ROUTES-------------------------*/
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});
/* ---------------------------API-------------------------*/
app.all('/users', (req, res) => {
  pool.getConnection((err, conn) => {
    const query = 'SELECT * FROM users';
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send(lines);
      conn.release();
    });
  });
});
/* ---------------------PPORTS-------------------*/
const PORT = '8080';
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Blazapp API Listening in port', PORT, '...');
});
