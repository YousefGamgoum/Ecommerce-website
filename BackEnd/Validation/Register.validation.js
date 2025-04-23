const Joi = require("joi");

let registerSchema = Joi.object({
  email: Joi.string()
    .required()
    .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  username: Joi.string().required().min(8).max(20),
  password: Joi.string().required().min(8),
  firstName: Joi.string().required().min(3).max(15),
  lastName: Joi.string().required().min(3).max(15),
  dob: Joi.date().iso().less("now").messages({
    "date.less": "Date of birth must be in the past",
  }),
  role: Joi.string().valid("user", "admin", "seller").default("user"),
  image: Joi.string(),
});

module.exports = registerSchema;
