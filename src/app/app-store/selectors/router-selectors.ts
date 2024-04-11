import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "../router/custom-route-serializer";
import { RouterReducerState } from "@ngrx/router-store";

const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>("router");

export const getRouterInfo = createSelector(
    getRouterState , 
    (state) => {
        return state.state.params
    }
)

export const getRouterUrl = createSelector(
    getRouterState , 
    (state) => {
        return state.state.url
    }
)
