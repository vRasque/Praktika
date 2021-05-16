const {getUserInfo} = require("../modules/user.func.js");
const edu = (req, res) => {
  try {
    res = {
      status: true,
      userinfo: getUserInfo(req.user)
    }
    console.log(res);
    return res;
  } catch (error) {
    res = {
      status: false,
      message: error.message,
    }
    return res;
  }
}

module.exports = edu;
