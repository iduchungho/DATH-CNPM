import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

export const requireUser = (req: Request, res: Response, next: NextFunction) => {
    if (!res.locals.user) {
        return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
    }
    return next();
}

export const requireEmployee = (req: Request, res: Response, next: NextFunction) => {
    if(res.locals.user.role !== 'employee' || res.locals.user.role !== 'admin'){
        return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
    }
    return next();
}

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    if(res.locals.user.role !== 'admin'){
        return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
    }
    return next();
}