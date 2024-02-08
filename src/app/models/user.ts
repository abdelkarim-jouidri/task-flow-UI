export interface User {
    id : string,
    fistName : string,
    lastName : string,
    password : string
    role : Role
}


export enum Role {
    MANAGER, USER
}