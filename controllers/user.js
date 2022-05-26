const bcrypt = require('bcrypt');
const { User } = require('../models/user');


exports.addUser = async (req, res, next) => {
  const { body } = req;
  let user = await new User(body);
  await user.save();
  return res.render("home");
}

exports.logIn = async (req, res, next) => {
  const {email,password}=req.body;
  if (!email || !password) {
    return res.render("404")
  }

  req.check
  const user = await User.findOne({email});

  if(!user){
    return res.render("404")
  }

  const validatePass=await bcrypt.compare(req.body.password , user.password);

    if(!validatePass)return res.render("404");

    session=req.session;
    session.userid=req.body.email;
    return res.render("home")

}








