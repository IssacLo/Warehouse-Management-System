const Joi = require("joi");

//Register Validation

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

const itemValidation = (data) => {
  const schema = Joi.object({
    general: {
      itemDescription: Joi.string().min(6).max(50).required(),
      category: Joi.string().min(6).max(50).required(),
      model: Joi.string().min(6).max(50).required(),
      serialNumber: Joi.string().min(6).max(50).required(),
      itemStatus: Joi.string().min(6).max(50).required(),
      remarks: Joi.string().min(6).max(50).required(),
    },
    vendor: {
      vendor: Joi.string().min(6).max(50).required(),
      originalInvoice: Joi.string().min(6).max(50).required(),
      purchaseCost: Joi.string().min(6).max(50).required(),
      purchaseDate: Joi.string().min(6).max(50).required(),
    },
    client: {
      client: Joi.string().min(6).max(50).required(),
      clientInvoice: Joi.string().min(6).max(50).required(),
      clientContractExpirationDate: Joi.date().raw().required(),
      warrantyPeriod: Joi.date().raw().required(),
      warrantyTC: Joi.string().min(6).max(50).required(),
    },
    serviceCenter: {
      address: Joi.string().min(6).max(50).required(),
      phoneNumber: Joi.number().min(1).max(50).required(),
    },
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.courseValidation = itemValidation;
