import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/interfaces/IUser";

//create all actions for user


//get all users
export const LOAD_USERS_FAILURE:string = "[Users Api] Users Api Failure";

//load Data
export const LOAD_USERS:string = "[Load Users] Load Api";
export const LOAD_USERS_SUCCESS:string = "[Load Users] Load Api Success";
//details Data
export const DETAILS_USERS:string = "[Details Users] Details Api";
export const DETAILS_USERS_SUCCESS:string = "[Details Users] Details Api Success";

//failure (Action)
export const LoadUsersFailure = createAction(LOAD_USERS_FAILURE , props<{ErrorMessage:string}>());

//load (Action)
export const LoadUsersSuccess = createAction(LOAD_USERS_SUCCESS , props<{Users:IUser[]}>());
export const LoadUsers = createAction(LOAD_USERS , props<{Page:number}>());

//Lood details (Action)
export const DetailsUsersSuccess = createAction(DETAILS_USERS_SUCCESS , props<{User:IUser}>());
export const DetailsUsers = createAction(DETAILS_USERS , props<{Id:Number|undefined}>());

