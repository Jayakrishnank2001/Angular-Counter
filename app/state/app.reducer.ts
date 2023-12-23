import { createReducer,on } from "@ngrx/store";
import { customCounter, decrement, increment, reset } from "./app.actions";
import { state } from "@angular/animations";

const initialState=0

const _counterReducer=createReducer(
    initialState,
    on(increment,(state)=>state+1),
    on(decrement,(state)=>state-1),
    on(reset,(state)=>0),
    on(customCounter,(state,action)=>state=(action.action=='add'?state+action.value:state-action.value))
)

export function counterReducer(state:any,action:any){
    return _counterReducer(state,action)
} 

