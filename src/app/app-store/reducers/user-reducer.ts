import { createReducer, on } from "@ngrx/store"
import { IUserStore } from "src/app/interfaces/IUser-store";
import { DetailsUsersSuccess, LoadUsers, LoadUsersFailure, LoadUsersSuccess } from "../actions/user-actions";

//create initial state
const initialState:IUserStore = { users_list: [], error_message: null , user_details : null};

const _userReducer = createReducer(
    initialState,

    //switch actions
    on(LoadUsers , (state , action) => { //in case successed
        return {
            ...state,
            error_message: "",
            user_details: null
        }
    }),

    on(LoadUsersSuccess , (state , action) => { //in case successed
        return {
            ...state,
            users_list: [...action.Users],
            error_message: "",
            user_details: null
        }
    }),

    on(DetailsUsersSuccess , (state , action) => { //in case successed
        return {
            ...state,
            user_details: action.User
        }
    }),

    on(LoadUsersFailure , (state , action) => { //in case failed
        return {
            ...state,
            users_list: [],
            error_message: action.ErrorMessage,
            user_details: null
        }
    }),
);

//create user reducer
export const userReducer = function(state:any , action:any){
    return _userReducer(state , action);
}