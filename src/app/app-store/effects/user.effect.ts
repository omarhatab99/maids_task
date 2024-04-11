import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { DETAILS_USERS, DetailsUsersSuccess, LOAD_USERS, LoadUsersFailure, LoadUsersSuccess } from "../actions/user-actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { LoadSpinner } from "../actions/app-actions";


@Injectable()
export class UserEffect{
    
    constructor(private _UserService:UserService , private _Actions:Actions){}

    //this effect fire when load all user 
    _load = createEffect(() => 
        this._Actions.pipe(
            ofType(LOAD_USERS),
            exhaustMap((action:any) => {
                return this._UserService.getUserPagination(action?.Page).pipe(
                    map((response) => {
                        return LoadUsersSuccess({Users:response?.data});
                    }),
                    catchError((error:any) => of(LoadUsersFailure({ErrorMessage:error?.message}) , LoadSpinner({isLoaded:false})))
                )
            })
        )
    );

    //this effect fire when load only user Details
    _details = createEffect(() => 
        this._Actions.pipe(
            ofType(DETAILS_USERS),
            exhaustMap((action:any) => {
                return this._UserService.getUserDetails(action.Id).pipe(
                    map((response) => {
                        return DetailsUsersSuccess({User:response.data});
                    }),
                    catchError((error:any) => of(LoadUsersFailure({ErrorMessage:error.message}) , LoadSpinner({isLoaded:false})))
                )
            })
        )
    );
}