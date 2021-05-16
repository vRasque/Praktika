const express = require('express');
const cors = require('cors');

// -- Controllers START
const regist = require('./controllers/regist');
const auth = require('./controllers/auth');
// -- Controllers END

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
// -- Rotes END

// -- DatabaseInit START
const db = require('./models/init.js');
db.sequelize.sync({force: false});
// -- DatabaseInit END

app.listen(3000);