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

const addUser = async (data) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(data.pass, saltRounds);
  console.log(hash, data);
  User.create({
    username: data.username,
    password: hash,
  }).then(res=>{
    console.log(res);
  }).catch(err=>console.log(err));
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
function verifyToken(data) {
  console.log(data);
}
// const verifyToken = async (data) => {
//   // let token = jwt.verify(data, config.key);
//   // return token;
//   console.log(data);
// };

module.exports = {
  addUser,
  getServerUser,
  checkHash,
  checkUser,
  genToken,
  getUserInfo,
  verifyToken
}
