const userRouter = require('express').Router();
const { validateUserById, validateUpdateProfileInfo, validateUpdateAvatar } = require('../middlewares/celebrateValidation');

const {
  getUsers,
  getCurrentUser,
  getUserById,
  updateProfileInfo,
  updateUserAvatar,
} = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/me', getCurrentUser);
userRouter.get('/:userId', validateUserById, getUserById);
userRouter.patch('/me', validateUpdateProfileInfo, updateProfileInfo);
userRouter.patch('/me/avatar', validateUpdateAvatar, updateUserAvatar);

module.exports = userRouter;
