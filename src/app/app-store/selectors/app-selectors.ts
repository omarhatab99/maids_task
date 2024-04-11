import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGlobalStore } from "src/app/interfaces/IGlobal-store";
import { IUserStore } from "src/app/interfaces/IUser-store";
import { User } from "src/app/models/user";


//create all selectors for users
const appState = createFeatureSelector<IGlobalStore>("app");

//get spinner state
export const getSpinnerState = createSelector(
    appState,
    (state) => {
        return state.isLoaded;
    }
)