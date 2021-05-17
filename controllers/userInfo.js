const { getUserInfo } = require("../modules/user.func.js");
const edu = async (req, res) => {
  try {
    let userinfo = await getUserInfo(req.user_id);
    res = {
      status: true,
      userinfo: userinfo
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

module.exports = edu;
