const {genToken, checkHash, getServerUser} = require("../modules/user.func.js");

const auth = async (req, res) => {
  let username = req.username;
  let pass = req.pass;
  try {
    if (username == '' || pass == '') {
      throw new Error("Заполните все поля");
    }
    let userData = await getServerUser(username);
    if (userData == null) {
      throw new Error("Неверный логин или пароль");
    }
    if (checkHash(pass, userData.password) == false) {
      throw new Error("Неверный логин или пароль");
    }
    console.log(userData);
    let token = genToken(userData.id);
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

module.exports = auth;