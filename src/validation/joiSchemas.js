import Joi from "joi";

export const addPlayer = {
  name: Joi.string().required().min(2),
  age: Joi.string().required().min(1),
};

export const createUser = {
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
};

export const createTeam = {
  name: Joi.string().required(),
  ageGroup: Joi.string().required(),
  line1: Joi.string().required(),
  line2: Joi.string(),
  city: Joi.string().required(),
  postCode: Joi.string().required(),
};

export const addChildren = {
  name: Joi.string().required().min(2),
  age: Joi.string().required().min(1),
  team: Joi.string().required(),
  ageGroup: Joi.string().required(),
};

export const createFixture = {
  date: Joi.date().required(),
  meetTime: Joi.required(),
  kickOff: Joi.required(),
  opposition: Joi.required(),
  venue: Joi.required(),
};
