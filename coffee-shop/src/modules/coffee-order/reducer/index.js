import { ASYNC_STATUS } from "../../../redux/consts";
import { COFFEE_ACTIONS } from "../actions/consts";
import {items} from '../../../redux/states'
//import {getCoffee} from '../actions/index'
const initialState = {
    error: null,
    data:[],
    status : ASYNC_STATUS.CREATED
}

export function coffeeReducer(state = initialState,action){
//console.log(action)
//console.log(state)
switch(action.type){
    
    case `${COFFEE_ACTIONS.GET_COFFEE}_CREATED`:
    console.log('Farda',action)
        return {
            ...state,
            status : ASYNC_STATUS.CREATED,
            data : action.payload,
            error : null
        }
       case `${COFFEE_ACTIONS.GET_COFFEE}_IN_PROGRESS`:
        return{
            ...state,
            status : ASYNC_STATUS.IN_PROGRESS,
            data : action.payload,
            error : null
        }
    case `${COFFEE_ACTIONS.GET_COFFEE}_DONE`:
      return{
          ...state,
          status : ASYNC_STATUS.DONE,
          data : action.payload,
          error : null
      }
    case `${COFFEE_ACTIONS.GET_COFFEE}_ERROR`:
        return{
            ...state,
            status : ASYNC_STATUS.ERROR,
            error : action.error
        }    
        default:
        break;
}



return state
}