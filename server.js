const express = require('express');
const cors = require('cors');

// -- Controllers START
const regist = require('./controllers/regist');
const auth = require('./controllers/auth');
const userInfo = require('./controllers/userInfo');
const edu = require('./controllers/edu');
// -- Controllers END

// Auth handler
let verifyToken = require('./modules/user.func.js');

// -- Rotes START
const app = express();
app.use(cors());
app.use(express.json());
app.post('/regist', async (req, res) => {
  res.json(await regist(req.body));
});
app.post('/auth', async (req, res) => {
  res.json(await auth(req.body));
});
verifyToken('234243');
app.use('/userinfo', (req, res, next) => {
  let status = verifyToken(req.headers['token']);
  console.log(status);
  next();
});

app.post('/userinfo', async (req, res) => {
  res.json(userInfo(req));
});
app.post('/edu', async (req, res) => {
  res.json(edu(req));
});
// -- Rotes END

// -- DatabaseInit START
const db = require('./models/init.js');
db.sequelize.sync({force: false});
// -- DatabaseInit END

console.log('SERVER START');
app.listen(3000);
