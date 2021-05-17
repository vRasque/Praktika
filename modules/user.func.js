const db = require("../models/init.js");
const config = require("../config/config.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = db.users;

const checkUser = async (data, res) => {
  res = User.findOne({where: {username: data}, raw: true});
  if (await res == null) {
    return false;
  } else {
    return true;
  }
};

const addUser = async (data, res) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(data.pass, saltRounds);
  var user = await User.create({
    username: data.username,
    password: hash,
  })
  return user.id;
}

const getServerUser = async (data, res) => {
  res = User.findOne({where: {username: data}, raw: true});
  return await res;
}

const getUserInfo = async (data, res) => {
  const user_raw = await User.findByPk(data);
  res = {
    username: user_raw.username
  }
  return await res;
}

const checkHash = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
}

const genToken = (data) => {
  let token = jwt.sign({id: data}, config.key);
  return token;
};
const verifyToken = async (req,res,next) => {
  const token = req.headers['token'];
  try {
    if (!token) throw new Error('Требуется авторизация');
    user = jwt.verify(token, config.key);
    req.user_id = user.id;
    next();
  } catch(err) {
    res.json({status: 401, message: 'Требуется авторизация'});
  }
}

module.exports = {
  addUser,
  getServerUser,
  checkHash,
  checkUser,
  genToken,
  getUserInfo,
  verifyToken
}
