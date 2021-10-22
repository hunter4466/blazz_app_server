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
app.get('/getUserAuth/:id/:id2', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) { throw err; }

    const query = `SELECT * FROM users WHERE user = '${req.params.id}' AND pass = '${req.params.id2}'`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      if (lines.length > 0) {
        res.send({
          auth: true,
          userName: lines[0].name,
          userLastName: lines[0].last_name,
          ato: lines[0].access_token,
        });
        conn.release();
      } else {
        res.send({ auth: false, error: 'User not found' });
        conn.release();
      }
    });
  });
});

app.get('/getUsertkAuth/:id', (req, res) => {
  console.log('triggered');
  pool.getConnection((err, conn) => {
    if (err) { throw err; }
    const query = `SELECT * FROM users WHERE access_token = ${req.params.id}`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      if (lines.length > 0) {
        res.send({
          auth: true,
          userName: lines[0].name,
          userLastName: lines[0].last_name,
          ato: lines[0].access_token,
        });
        conn.release();
      } else {
        res.send({ auth: false, error: 'User not found' });
        conn.release();
      }
    });
  });
});
/* ---------------------PPORTS-------------------*/
const PORT = '8080';
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Blazapp API Listening in port', PORT, '...');
});
