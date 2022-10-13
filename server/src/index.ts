import express, { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ExpressError from './utils/expressError'
import cors from 'cors'
import logger from './utils/logger'
import cookieParser from 'cookie-parser'
import userRoute from './modules/user/user.route'
import deserializeUser from './middlewares/deserializeUser'
import dotenv from 'dotenv'
import uploadFoodRouter from './modules/uploadFood/uploadFood.route'
if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(deserializeUser);
app.use('/api/users', userRoute)
app.use('/api/uploadFoods',uploadFoodRouter)
app.get('/healthcheck',(req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('ok');
})
app.all('*', (req : Request , res : Response, next : NextFunction) => {
    return next(new ExpressError('Not Found', StatusCodes.NOT_FOUND))
})
app.use((err : ExpressError , req : Request , res : Response) => {
    const { status = StatusCodes.INTERNAL_SERVER_ERROR, message = 'Something went wrong' } = err
    res.status(status).send(message)
})
app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`)
})