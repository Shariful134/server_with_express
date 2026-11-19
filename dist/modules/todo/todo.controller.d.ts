import { Request, Response } from 'express';
declare const createTodo: (req: Request, res: Response) => Promise<void>;
declare const getTodo: (req: Request, res: Response) => Promise<void>;
declare const getSingleTodo: (req: Request, res: Response) => Promise<void>;
declare const updateTodo: (req: Request, res: Response) => Promise<void>;
declare const deleteTodo: (req: Request, res: Response) => Promise<void>;
export declare const todoControllers: {
    createTodo: typeof createTodo;
    getTodo: typeof getTodo;
    getSingleTodo: typeof getSingleTodo;
    updateTodo: typeof updateTodo;
    deleteTodo: typeof deleteTodo;
};
export {};
//# sourceMappingURL=todo.controller.d.ts.map