import { prisma } from "../../utils/prisma";
import { UploadFoodInput } from "./uploadFood.schema";

export const uploadFood = async (input : UploadFoodInput) => {
    const food = await prisma.uploadFood.create({
        data : {
            title : input.title,
            category : input.category,
            price : input.price,
            averageRating : input.averageRating,
            description : input.description
        }
    })
    return food;
}