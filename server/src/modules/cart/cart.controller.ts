import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import { addToCartInput, cartIdInput } from "./cart.schema";
import { addToCart, createCart, deleteCartById, findCartById } from './cart.service';
import ExpressError from '../../utils/expressError';

export const addToCartController = async (req : Request<{},{},addToCartInput>,  res: Response, next : NextFunction) => {
    const userId = res.locals.user.id
    const cart = await createCart(userId);
    for(let orderedFood of req.body) {
        await addToCart(orderedFood,cart.id)
    }
    return res.status(StatusCodes.CREATED).send(cart);
}

export const  deleteCartController = async (req : Request<cartIdInput,{},{}>, res : Response, next : NextFunction) => {
    const userId = res.locals.user.id;
    const foundCart = await findCartById(req.params.cartId);
    if(!foundCart) {
        return next(new ExpressError('Cart not found',StatusCodes.NOT_FOUND))
    }
    if(userId !== foundCart.userId) {
        return next(new ExpressError('Unauthorized',StatusCodes.UNAUTHORIZED))
    }
    const cart = await deleteCartById(foundCart.id)
    return res.status(StatusCodes.OK).send(cart);
}