import {INCREMENT,DECREMENT} from "../constants"
import store from "../store"
export const createIncrementAction=data=>({ type:INCREMENT,data})
export const createDecrementAction=data=>({ type:DECREMENT,data})
export const  createDecrementybAction=(data,time)=>{
    return()=>{
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
                  
              }, time);
    }
  
}