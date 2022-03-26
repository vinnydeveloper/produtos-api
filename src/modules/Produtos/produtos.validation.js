const { validate, Joi } = require("express-validation");

module.exports = {
  create: validate({
    body: Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      poster: Joi.string().required(),
      price: Joi.number().required(),
    }),
  }),
  update: validate({
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      poster: Joi.string().required(),
      price: Joi.number().required(),
    }),
  }),
  delete: validate({
    params: Joi.object({
      id: Joi.string().required(),
    }),
  }),
  getOne: validate({
    params: Joi.object({
      id: Joi.string().required(),
    }),
  }),
};
