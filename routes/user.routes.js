const { Router} = require('express');
const { getUserById, getUsers, postUser, putUser, deleteUser, getTodosOfUser } = require('../controllers/users.controller');
const userRouter = Router();
userRouter.get('/',    getUsers);
userRouter.get('/:user_id',
getUserById);
userRouter.post('/',postUser)
userRouter.put('/:user_id',
putUser);
userRouter.delete('/:user_id', deleteUser);

module.exports = userRouter