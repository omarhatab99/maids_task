import { IUser } from "../interfaces/IUser";

export class User implements IUser{
    id: number|undefined;
    email: string|undefined;
    first_name: string|undefined;
    last_name: string|undefined;
    avatar: string|undefined;

}