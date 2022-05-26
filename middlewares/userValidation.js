const joi = require("joi");
const { customError } = require('../helpers/errorHandeler')
const { User } = require("../models/user");

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  address: joi.string().required(),
})

exports.userValidation = async (req, res, next) => {
  const { body } = req;

  try {
    let user = await User.findOne({ email: body.email });

    if (user) {

      return next(customError({ status: 400, message: "Email already exists" }));
    }

    else {
      await userSchema.validateAsync(body, {
        abortEarly: false
      });

      return next();
    }

  } catch (error) {
    return next(customError({ status: 400, message: error.details }));
  }
}