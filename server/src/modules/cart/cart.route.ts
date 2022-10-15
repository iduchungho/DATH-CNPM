import express from 'express'
import { processRequestBody, processRequestParams } from 'zod-express-middleware';
import requireUser from '../../middlewares/requireUser';
import catchAsync from '../../utils/catchAsync';
import { addToCartController ,deleteCartController} from './cart.controller';
import { addToCartSchema, cartIdSchema } from './cart.schema';
const cartRouter = express.Router()
cartRouter.post('/',requireUser,processRequestBody(addToCartSchema),catchAsync(addToCartController))
cartRouter.delete('/:cartId',requireUser,processRequestParams(cartIdSchema),catchAsync(deleteCartController))
export default cartRouter;