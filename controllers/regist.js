const {checkUser, addUser, genToken} = require("../modules/user.func.js");

const regist = async (req, res) => {
  let username = req.username;
  let pass = req.pass;
  try {
    if(/^[a-zA-Z1-9]+$/.test(username) === false) {
      throw new Error("Логин должен состоять из латинских букв и цифр 1-9");
    }
    if(username.length < 4 || username.length > 20) {
      throw new Error("Длина логина должна быть от 4 до 20 символов");
    }
    if(await checkUser(username)) {
      throw new Error("Логин занят");
    }
    if(/^[a-zA-Z1-9]+$/.test(pass) === false) {
      throw new Error("Пароль должен состоять из латинских букв и цифр 1-9");
    }
    if(pass.length < 6 || pass.length > 20) {
      throw new Error("Длина пароля должна быть от 6 до 20 символов");
    }
    let user_id = await addUser(req);
    let token = genToken(user_id);
    res = {
      status: true,
      message: "Круто",
      token: token,
    }
    return res;
  } catch (error) {
    res = {
      status: false,
      message: error.message,
    }
    return res;
  }
}

module.exports = regist;
