import { createAction, props } from "@ngrx/store";



export const increment=createAction('[counter component] increment')
export const decrement=createAction('[counter component] decrement')
export const reset=createAction('[counter component] reset')
export const customCounter=createAction('[customCounterComponent] customCounter',props<{value:number,action:string}>())
export const rename=createAction('[counter component] rename',props<{counterName:string}>())
