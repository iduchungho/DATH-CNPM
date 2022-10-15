import {z} from 'zod';

const orderedFoodSchema = z.object({
    title : z.string({
        required_error: 'Title is required'
    }),
    price : z.string({
        required_error: 'Price is required'
    }),
    quantity : z.string({
        required_error: 'Quantity is required'
    }),
    description : z.string({}).optional(),
})
export const cartIdSchema = z.object({
    cartId : z.string({
        required_error: 'Cart Id is required'
    })
})
export const addToCartSchema = z.array(orderedFoodSchema)
export type cartIdInput = z.infer<typeof cartIdSchema>;
export type orderedFoodInput = z.infer<typeof orderedFoodSchema>
export type addToCartInput = z.infer<typeof addToCartSchema>