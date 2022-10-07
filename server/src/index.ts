import express, { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ExpressError from './ultis/expressError'
import logger from './ultis/logger'
const app = express()
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
app.listen(3000, () => {
    logger.info(`Server is listening on port ${3000}`)
})