import { createReducer, on } from "@ngrx/store"
import { IGlobalStore } from "src/app/interfaces/IGlobal-store";
import { LoadSpinner } from "../actions/app-actions";

//create initial state
const initialState:IGlobalStore = {isLoaded: false};

const _userReducer = createReducer(
    initialState,

    //switch actions
    on(LoadSpinner , (state , action) => { //in case failed
        return {
            ...state,
            isLoaded:action.isLoaded
        }
    })

);

//create user reducer
export const appReducer = function(state:any , action:any){
    return _userReducer(state , action);
}