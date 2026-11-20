import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken"
import { config } from '../config';
//(...role: string[]) this name is rest operator, which is a array of string 
const auth = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;

            if (!token) {
                return res.status(500).json({ message: "you are not authorized" })
            }

            const decoded = jwt.verify(token, config.jwt_secrete as string) as JwtPayload

            console.log({ decodedToken: decoded })
            req.user = decoded;

            if (roles.length && !roles.includes(decoded.role))
                return next();
        } catch (err: any) {
            res.status(501).json({
                success: false,
                message: err.message
            })
        }
    };

};
export default auth;
