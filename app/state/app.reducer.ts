import { createReducer,on } from "@ngrx/store";
import { customCounter, decrement, increment, rename, reset } from "./app.actions";
import { state } from "@angular/animations";
import { initialState } from "./app.state";


const _counterReducer=createReducer(
    initialState,
    on(increment,(state)=>{
        return{
            ...state,
            counter:state.counter+1
        }
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter:state.counter-1
        }
    }),
    on(reset,(state)=>{
        return{
            ...state,
            counter:0
        }
    }),
    on(customCounter,(state,action)=>{
        return{
            ...state,
            counter:action.action=='add'?state.counter+action.value:state.counter-action.value
        }
    }),
    on(rename,(state,action)=>{
        return{
            ...state,
            counterName:action.counterName
        }
    })
)

export function counterReducer(state:any,action:any){
    return _counterReducer(state,action)
} 

