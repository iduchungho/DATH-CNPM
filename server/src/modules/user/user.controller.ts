import { CookieOptions, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ExpressError from "../../utils/expressError";
import dotenv from 'dotenv'
if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
import { verifyPassword } from "../../utils/hash";
import { signJwt } from "../../utils/jwt.utils";
import { createSession, deleteSession } from "../session/session.service";
import { loginUserInput, registerUserInput } from "./user.schema";
import { findUserByEmail, registerUser } from "./user.service";
import cookieOptions from "../../utils/cookieOption";
export const registerUserController = async (req: Request<{}, {}, registerUserInput>, res: Response, next: NextFunction) => {
    const { email, username, password , role} = req.body;
    if(role !== 'user') {
        return next(new ExpressError('Unauthorized',StatusCodes.UNAUTHORIZED))
    }
    const user = await registerUser({ email, username, password , role });
    res.status(StatusCodes.CREATED).send(user);
}

export const loginUserController = async (req: Request<{}, {}, loginUserInput>, res: Response, next: NextFunction) => {
    const { email, password: candidatePassword } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
        return next(new ExpressError('Invalid Credentials', StatusCodes.UNAUTHORIZED));
    }
    const isCorrectPassword = verifyPassword({ candidatePassword, hash: user.password, salt: user.salt });
    if (!isCorrectPassword) {
        return next(new ExpressError('Invalid Credentials', StatusCodes.UNAUTHORIZED));
    }
    const { password, salt, ...rest } = user;
    const accessTokenTtl = "15m";
    const refreshTokenTtl = "1d";
    const session = await createSession(user.id, req.get('user-agent') || '');
    const accessToken = signJwt(
        { sessionId: session.id, ...rest },
        { expiresIn: accessTokenTtl }
    )
    const refreshToken = signJwt(
        { sessionId: session.id, ...rest },
        { expiresIn: refreshTokenTtl }
    )
    res.cookie('accessToken', accessToken, cookieOptions);
    res.cookie("refreshToken", refreshToken, cookieOptions);
    return res.status(StatusCodes.CREATED).send({ accessToken, refreshToken });
}

export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
    const { user } = res.locals;
    return res.status(StatusCodes.OK).send(user);
}

export const logoutController = async (req: Request, res: Response, next: NextFunction) => {
    const sessionId = res.locals.user.sessionId;
    res.locals.user = null;
    await deleteSession(sessionId);
    res.clearCookie('accessToken', cookieOptions);
    res.clearCookie('refreshToken', cookieOptions);
    return res.json({
        accessToken : "",
        refreshToken : ""
    });
}

export const registerEmployeeController = async (req: Request<{}, {}, registerUserInput>, res: Response, next: NextFunction) => {
    const { email, username, password , role} = req.body;
    if(role !== 'employee') {
        return next(new ExpressError('Unauthorized',StatusCodes.UNAUTHORIZED))
    }
    const user = await registerUser({ email, username, password , role });
    res.status(StatusCodes.CREATED).send(user);
}