const regist = async (req, res) => {
  try {
    console.log(req);
    res = {
      status: true,
      message: "horosho",
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