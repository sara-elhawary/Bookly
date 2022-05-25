const { default: mongoose } = require('mongoose');
const { customError } = require('../helpers/errorHandeler');
const { User } = require('../models/user');


exports.addUser = async (req, res, next) => {
  const { body } = req;
  let user = await new User(body);
  await user.save();
  return res.status(201).json({ success: true, user: { name: user.name, email: user.email, isAdmin: user.isAdmin } })
}

exports.logIn = async (req, res, next) => {
  const { body: { email, password } } = req;

  let user = await User.findOne({ email: email }).select('password email isAdmin');
  if(!user)return next(customError({ status: 400, message: "invalid Email or Password" }));


  let isValid=await user.comparePasswords(password);
  if (isValid) {
    let token = await User.createToken(user);
    return res.status(200).json({ success: true, user:{_id:user.id,email:user.email,isAdmin:user.isAdmin},token });
  }
  return next(customError({ status: 400, message: "invalid Email or Password" }));
}








