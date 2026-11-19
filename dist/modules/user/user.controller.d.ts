import { Request, Response } from 'express';
declare const createUser: (req: Request, res: Response) => Promise<void>;
declare const getUser: (req: Request, res: Response) => Promise<void>;
declare const getSingleUser: (req: Request, res: Response) => Promise<void>;
declare const userUpdate: (req: Request, res: Response) => Promise<void>;
declare const userDelete: (req: Request, res: Response) => Promise<void>;
export declare const userController: {
    createUser: typeof createUser;
    getUser: typeof getUser;
    getSingleUser: typeof getSingleUser;
    userUpdate: typeof userUpdate;
    userDelete: typeof userDelete;
};
export {};
//# sourceMappingURL=user.controller.d.ts.map