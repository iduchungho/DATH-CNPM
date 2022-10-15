import { prisma } from "../../utils/prisma"
import { orderedFoodInput } from "./cart.schema";

export const createCart = async (userId : string) =>{
    const cart = await prisma.cart.create({
        data : {
            userId
        }
    })
    return cart;
}

export const addToCart = async (orderedFood : orderedFoodInput, cartId : string) => {
    await prisma.orderedFood.create({
        data : {
            title : orderedFood.title,
            price : orderedFood.price,
            quantity : orderedFood.quantity,
            description : orderedFood.description,
            cartId : cartId
        }
    })
}

export const findCartById = async(cartId : string) => {
    const cart = await prisma.cart.findUnique({
        where : {
            id : cartId
        }
    })
    return cart;
}

export const deleteCartById = async(cartId : string) => {
    const cart = await prisma.cart.delete({
        where : {
            id : cartId
        }
    })
    return cart;
}