declare const createUser: (name: string, email: string) => Promise<import("pg").QueryResult<any>>;
declare const getUser: () => Promise<import("pg").QueryResult<any>>;
declare const getSingleUser: (id: string) => Promise<import("pg").QueryResult<any>>;
declare const userUpdate: (name: string, email: string, id: string) => Promise<import("pg").QueryResult<any>>;
declare const userDelete: (id: string) => Promise<import("pg").QueryResult<any>>;
export declare const userService: {
    createUser: typeof createUser;
    getUser: typeof getUser;
    getSingleUser: typeof getSingleUser;
    userUpdate: typeof userUpdate;
    userDelete: typeof userDelete;
};
export {};
//# sourceMappingURL=user.service.d.ts.map