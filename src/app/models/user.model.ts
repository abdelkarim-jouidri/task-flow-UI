export interface User {
    uuid : string,
    firstname : string,
    lastname : string,
    password : string
    role : Role
}


export enum Role {
    MANAGER, USER
}