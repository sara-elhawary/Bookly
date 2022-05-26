const { default: mongoose } = require('mongoose');
const { customError } = require('../helpers/errorHandeler');
const bcrypt = require('bcrypt');
const { User } = require('../models/user');

const {body,validationResult} = require('express-validator');


exports.addUser = async (req, res, next) => {
  const { body } = req;
  let user = await new User(body);
  await user.save();
  return res.render("home");
}

exports.logIn = async (req, res, next) => {
  const {email,password}=req.body;
  // if (!email || !password) {
  //   return res.render("home",{failed:true})
  // }
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    errors.array().forEach((e) => {
      obj[e.param] = e.msg;
    });
    body = req.body;
    return res.render('login', { errors: obj, body });
  }
  const user = await User.findOne({email});

  if(!user){
    return res.redirect("/home",{failed:true})
  }

  // console.log(user.password);
  const validatePass=await bcrypt.compare(req.body.password , user.password);

    if(!validatePass)return res.redirect("/home",{failed:true});

    session=req.session;
    session.userid=user._id;
    return res.render("home")

}








