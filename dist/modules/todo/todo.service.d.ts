declare const creteTodo: (user_id: string, title: string) => Promise<import("pg").QueryResult<any>>;
declare const getTodo: () => Promise<import("pg").QueryResult<any>>;
declare const getSingleTodo: (id: string) => Promise<import("pg").QueryResult<any>>;
declare const updateTodo: (title: string, completed: string, id: string) => Promise<import("pg").QueryResult<any>>;
declare const deleteTodo: (id: string) => Promise<import("pg").QueryResult<any>>;
export declare const todoServices: {
    creteTodo: typeof creteTodo;
    getTodo: typeof getTodo;
    getSingleTodo: typeof getSingleTodo;
    updateTodo: typeof updateTodo;
    deleteTodo: typeof deleteTodo;
};
export {};
//# sourceMappingURL=todo.service.d.ts.map