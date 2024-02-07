import { User } from "../../models/user";

export interface UserState {
    isLoading : boolean,
    error : string | null,
    users : User[]
}