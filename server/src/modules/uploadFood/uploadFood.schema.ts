import {z} from 'zod'

export const uploadFoodSchema = z.object({
    title : z.string({
        required_error : 'Title is required'
    }),
    category : z.string({
        required_error : 'Category is required'
    }),
    price : z.string({
        required_error : 'Price is required'
    }),
    averageRating : z.string({
        required_error : 'Average Rating is required'
    }),
    description : z.string({
        required_error : 'Description is required'
    })
})
export const deleteUploadedFoodSchema = z.object({
    uploadFoodId : z.string({
        required_error : 'Food Id is required'
    })
})
export type deleteUploadedFoodParam = z.infer<typeof deleteUploadedFoodSchema>
export type UploadFoodInput= z.infer<typeof uploadFoodSchema>