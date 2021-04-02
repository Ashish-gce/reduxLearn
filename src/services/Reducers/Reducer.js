import { Add_To_Cart, Remove_To_Cart } from '../Constant';

// Since, here we defined that 2-parameter that we need inside below function "cardItems()"
//  "initialState" is user defined variable.
const initialState = {
    // "cardData" => stores info. that comes from Component i.e.: anything like- mobile name, price, no. of product, ...
    // Therefor, whenever appropriate function call like:- "addToCart()" then that's data comes here and saved here, initialState,  cardData = [] => is array
    //  because in future these data may goes increase or decrease.


    cardData: []
}

// Since, Reduce.js function contains 2-parameter.
// export default function CardItems(state = initialState, action) {


//  to adding multiple items in our cart, we need 'clear' the initial state  as comparision to the above 'state = initialState'
export default function CardItems(state = [], action) {


    // and it contains different SWITCH cases-

    // We apply switch function to identified, which  "type"  comes from 'action' and on which we call which function 

    /*  Here, we match type on which we apply "switch" condition. */
    switch (action.type) {
        // below "Add_To_Cart, Remove_To_cart" comes from Action.js => 'type'.
        //    but this "Add_To_Cart" is comes from '../Constants' i.e.: "Add_To_Cart" string.
        case Add_To_Cart:

            // below we want to console, what's data comes from action in "reducer".
            // console.log("reducer", action);


            //  since, commented "return" only one item in the o/p, therefor to get multiple items in o/p we change them into array[]
            // return {
            //     ...state,
            //     cardData: action.data /* this "data" action.data comes from Action.js function parameter  */
            // }

            return [
                ...state,
                // to getting multiple o/p we need to make 'cardData' as object 
                { cardData: action.data }
            ]
        // break;
        case Remove_To_Cart:
            state.pop();
            return [
                ...state
            ]
        // break;

        // If not anr above "case" is matched then 'bydefault'  "default"  case is going to run.
        default:
            return state
    }
}