const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');
const deduperfunc = require('./server_utilities/deduper');

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
        const query2 = `SELECT * FROM business WHERE users_id = ${lines[0].id} AND active = 1`;
        conn.query(query2, (error2, lines2) => {
          if (error2) { throw error2; }
          if (lines2.length > 0) {
            res.send({
              auth: true,
              userId: lines[0].id,
              userName: lines[0].name,
              userLastName: lines[0].last_name,
              userEmail: lines[0].email,
              userUser: lines[0].user,
              userPass: lines[0].pass,
              userPhone: lines[0].phone,
              userDateOfBirth: lines[0].date_of_birth,
              ato: lines[0].access_token,
              activeBusiness: true,
              business: {
                id: lines2[0].id,
                name: lines2[0].name,
                address: lines2[0].address,
                description: lines2[0].description,
                backgroundImg: lines2[0].background_img,
                logoImg: lines2[0].logo_img,
                usersId: lines2[0].users_id,
              },
            });
            conn.release();
          } else {
            res.send({
              auth: true,
              userId: lines[0].id,
              userName: lines[0].name,
              userLastName: lines[0].last_name,
              userEmail: lines[0].email,
              userUser: lines[0].user,
              userPass: lines[0].pass,
              userPhone: lines[0].phone,
              userDateOfBirth: lines[0].date_of_birth,
              ato: lines[0].access_token,
              activeBusiness: false,
            });
            conn.release();
          }
        });
      } else {
        res.send({ auth: false, error: 'User not found' });
        conn.release();
      }
    });
  });
});

app.get('/getUsertkAuth/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) { throw err; }
    const query = `SELECT * FROM users WHERE access_token = ${req.params.id}`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      if (lines.length > 0) {
        const query2 = `SELECT * FROM business WHERE users_id = ${lines[0].id} AND active = 1`;
        conn.query(query2, (error2, lines2) => {
          if (error2) { throw error2; }
          if (lines2.length > 0) {
            res.send({
              auth: true,
              userId: lines[0].id,
              userName: lines[0].name,
              userLastName: lines[0].last_name,
              userEmail: lines[0].email,
              userUser: lines[0].user,
              userPass: lines[0].pass,
              userPhone: lines[0].phone,
              userDateOfBirth: lines[0].date_of_birth,
              ato: lines[0].access_token,
              activeBusiness: true,
              business: {
                id: lines2[0].id,
                name: lines2[0].name,
                address: lines2[0].address,
                description: lines2[0].description,
                backgroundImg: lines2[0].background_img,
                logoImg: lines2[0].logo_img,
                usersId: lines2[0].users_id,
              },
            });
            conn.release();
          } else {
            res.send({
              auth: true,
              userId: lines[0].id,
              userName: lines[0].name,
              userLastName: lines[0].last_name,
              userEmail: lines[0].email,
              userUser: lines[0].user,
              userPass: lines[0].pass,
              userPhone: lines[0].phone,
              userDateOfBirth: lines[0].date_of_birth,
              ato: lines[0].access_token,
              activeBusiness: false,
            });
            conn.release();
          }
        });
      } else {
        res.send({ auth: false, error: 'User not found' });
        conn.release();
      }
    });
  });
});

app.get('/loadBusiness/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) { throw err; }

    const query = `CALL LOAD_BUSINESS(${parseInt(req.params.id, 8)})`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      if (lines.length > 0) {
        const objectForDelivery = { activeBusiness: true, content: [] };
        deduperfunc(lines);

        res.send(objectForDelivery);
        conn.release();
      } else {
        res.send({ activeBusiness: false, error: 'Business not found' });
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
