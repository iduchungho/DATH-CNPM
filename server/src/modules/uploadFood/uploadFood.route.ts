import {deleteUploadedFoodSchema, uploadFoodSchema } from './uploadFood.schema';
import express from 'express'
import { deleteUploadedFoodController, getUploadedFoodController, uploadFoodController } from './uploadFood.controller'
import multer from 'multer'
import { storage } from '../../../cloudinary'
import requireAdmin from '../../middlewares/requireAdmin'
import { processRequestBody, processRequestParams } from 'zod-express-middleware'
const upload = multer({ storage })
const uploadFoodRouter = express.Router()

uploadFoodRouter.post('/',upload.single('image'),processRequestBody(uploadFoodSchema),uploadFoodController)
uploadFoodRouter.get('/',getUploadedFoodController)
uploadFoodRouter.delete('/:uploadFoodId',processRequestParams(deleteUploadedFoodSchema),deleteUploadedFoodController)
export default uploadFoodRouter