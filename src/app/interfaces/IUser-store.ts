import { IUser } from "./IUser";

export interface IUserStore {
    users_list: IUser[],
    user_details: IUser|null,
    error_message:string|null,
}
