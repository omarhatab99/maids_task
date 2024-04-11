import { createAction, props } from "@ngrx/store";



//create all global actions for app

//spinner
export const LOAD_SPINNER:string = "[Load Spinner] Load Spinner"



//spinner (Action)
export const LoadSpinner = createAction(LOAD_SPINNER , props<{isLoaded:boolean}>());