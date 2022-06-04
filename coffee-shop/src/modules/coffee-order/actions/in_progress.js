import { coffeeService } from "../service";
import { COFFEE_ACTIONS } from "./consts";

export function getCoffee(){
      return function(dispatch) {
        dispatch({type : COFFEE_ACTIONS.GET_COFFEE});
        coffeeService.getCoffee().then((data) => {
            dispatch({
            type : `${COFFEE_ACTIONS.GET_COFFEE}_IN_PROGRESS`,
            payload : data.data
        })
    }).catch((err) => {
        dispatch({
            type :`${COFFEE_ACTIONS.GET_COFFEE}_ERROR`,
            error : err
        })
    })
}
   
}

