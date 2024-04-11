import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUser } from "src/app/interfaces/IUser";
import { IUserStore } from "src/app/interfaces/IUser-store";


//create all selectors for users
const usersState = createFeatureSelector<IUserStore>("users");

//get user by id
export const getDetails= createSelector(
    usersState ,
    (state) => {
        //send user
        return state.user_details as IUser;
    }
)

//get user by id
export const getUserById = (id:number) => createSelector(
    usersState ,
    (state) => {
        //send user
        return state.users_list.find((x) => x.id == id) as IUser;
    }
)

//get all users
export const getAllUsers = createSelector(
    usersState,
    (state) => {
        return state.users_list;
    }
)


//get all users info
export const getAllUsersInfo = createSelector(
    usersState,
    (state) => {
        return state;
    }
)
