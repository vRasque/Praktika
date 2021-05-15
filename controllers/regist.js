const regist = async (req, res) => {
  try {
    if (req == "benis") {
      throw new Error("hehe u pooped");
    }
    console.log("123");
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