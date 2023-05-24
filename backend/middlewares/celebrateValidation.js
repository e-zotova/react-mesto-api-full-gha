const { celebrate, Joi } = require('celebrate');

const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

const validateCreateUser = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().regex(urlRegex),
    }),
  },
);

const validateLoginUser = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
);

const validateUserById = celebrate(
  {
    params: Joi.object().keys({
      userId: Joi.string().required().hex().length(24),
    }),
  },
);

const validateUpdateUserInfo = celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      about: Joi.string().min(2).max(30).required(),
    }),
  },
);

const validateUpdateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(urlRegex),
  }),
});

const validateCreateCard = celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().regex(urlRegex),
    }),
  },
);

const validateCardById = celebrate(
  {
    params: Joi.object().keys({
      cardId: Joi.string().required().hex().length(24),
    }),
  },
);

module.exports = {
  validateCreateUser,
  validateLoginUser,
  validateUserById,
  validateUpdateUserInfo,
  validateUpdateAvatar,
  validateCreateCard,
  validateCardById,
};
