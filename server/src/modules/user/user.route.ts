import { requireAdmin, requireUser } from './../../middlewares/requireRole';
import { loginUserSchema, registerUserSchema } from './user.schema';
import express from 'express';
import { processRequestBody } from 'zod-express-middleware';
import catchAsync from '../../utils/catchAsync';
import { registerUserController ,loginUserController, getCurrentUser, logoutController, registerEmployeeController} from './user.controller';

const userRoute = express.Router();
userRoute.post('/register',processRequestBody(registerUserSchema),catchAsync(registerUserController))
userRoute.post('/login',processRequestBody(loginUserSchema),catchAsync(loginUserController))
userRoute.get('/me',requireUser,catchAsync(getCurrentUser))
userRoute.get('/logout',requireUser,catchAsync(logoutController))
userRoute.post('/registerEmployee',requireAdmin,processRequestBody(registerUserSchema),catchAsync(registerEmployeeController))
export default userRoute