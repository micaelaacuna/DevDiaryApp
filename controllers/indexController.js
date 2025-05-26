const getMain = async (req, res) => {
  res.json({greet: "Hello world"});
};

module.exports = { getMain };
