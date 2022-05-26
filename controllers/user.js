const { default: mongoose } = require('mongoose');
const { customError } = require('../helpers/errorHandeler');
const { User } = require('../models/user');


exports.addUser = async (req, res, next) => {
  const { body } = req;
  let user = await new User(body);
  await user.save();
  return res.render("home");
}

exports.logIn = async (req, res, next) => {
  const { body: { email, password } } = req;

  let user = await User.findOne({ email: email }).select('password email isAdmin');
  if(!user)return next(customError({ status: 400, message: "invalid Email or Password" }));

  return next(customError({ status: 400, message: "invalid Email or Password" }));
}








