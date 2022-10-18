import { CookieOptions } from "express"

const cookieOptions : CookieOptions= {
    maxAge: 3.156e10,
    httpOnly: true,
    domain: 'localhost', // damh-cnpm.herokuapp.com , localhost
    path: '/',
    sameSite: 'lax',
    secure : false,
}

export default cookieOptions;