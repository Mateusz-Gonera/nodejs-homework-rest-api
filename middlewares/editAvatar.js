const Jimp = require("jimp");

const editAvatar = () => {
  return (req, res, next) => {
    Jimp.read(req.file.path)
      .then((img) => img.resize(250, 250).write(req.file.path))
      .catch((err) => console.log(err.message));
    next();
  };
};

module.exports = { editAvatar };
