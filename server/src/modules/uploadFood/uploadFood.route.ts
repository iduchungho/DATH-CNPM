import {deleteUploadedFoodSchema, uploadFoodSchema } from './uploadFood.schema';
import express from 'express'
import { deleteUploadedFoodController, getUploadedFoodController, uploadFoodController } from './uploadFood.controller'
import multer from 'multer'
import { storage } from '../../../cloudinary'
import requireAdmin from '../../middlewares/requireAdmin'
import { processRequestBody, processRequestParams } from 'zod-express-middleware'
import catchAsync from '../../utils/catchAsync';
const upload = multer({ storage })
const uploadFoodRouter = express.Router()

uploadFoodRouter.post('/',upload.single('image'),processRequestBody(uploadFoodSchema),catchAsync(uploadFoodController))
uploadFoodRouter.get('/',catchAsync(getUploadedFoodController))
uploadFoodRouter.delete('/:uploadFoodId',processRequestParams(deleteUploadedFoodSchema),catchAsync(deleteUploadedFoodController))
export default uploadFoodRouter