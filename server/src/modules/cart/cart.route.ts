import { requireUser } from './../../middlewares/requireRole';
import express from 'express'
import { processRequestBody, processRequestParams } from 'zod-express-middleware';
import catchAsync from '../../utils/catchAsync';
import { addToCartController ,deleteCartController, viewCartController} from './cart.controller';
import { addToCartSchema, cartIdSchema } from './cart.schema';
const cartRouter = express.Router()
cartRouter.post('/',requireUser,processRequestBody(addToCartSchema),catchAsync(addToCartController))
cartRouter.get('/:cartId',requireUser,catchAsync(viewCartController))
cartRouter.delete('/:cartId',requireUser,processRequestParams(cartIdSchema),catchAsync(deleteCartController))
export default cartRouter;