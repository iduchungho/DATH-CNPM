import { deleteUploadedFoodParam, UploadFoodInput } from './uploadFood.schema';
import { NextFunction, Request, Response } from "express";
import ExpressError from '../../utils/expressError';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '../../utils/prisma';
import { uploadFood } from './uploadFood.service';
import {cloudinaryUtils} from '../../../cloudinary';
export const uploadFoodController = async (req: Request<{},{},UploadFoodInput>, res: Response, next : NextFunction) => {
    const newFood = await uploadFood(req.body);
    if(!req.file) {
        return next(new ExpressError('Image is required',StatusCodes.BAD_REQUEST))
    }
    const {path , filename} = req.file
    await prisma.foodImage.create({
        data : {
            url : path,
            filename,
            foodId : newFood.id
        }
    })
    return res.status(StatusCodes.CREATED).send(newFood);
}

export const getUploadedFoodController = async (req: Request, res: Response) => {
    const foods = await prisma.uploadFood.findMany({
        include : {
            foodImage : true
        }
    })
    return res.status(StatusCodes.OK).send(foods);
}

export const deleteUploadedFoodController = async (req: Request<deleteUploadedFoodParam,{},{}>, res: Response) => {
    const {uploadFoodId} = req.params;
    const food = await prisma.uploadFood.delete({
        where : {
            id : uploadFoodId
        },
        include : {
            foodImage : true
        }
    })
    if(food.foodImage) {
        await cloudinaryUtils.uploader.destroy(food.foodImage.filename);
    }
    return res.status(StatusCodes.OK).send('Food Deleted');
}