import { Add_To_Cart } from '../Constant';

// below constant function is CALL to the button for addToCart
export const addToCart = (data) => {

    // below console.lg  data comes from <Home /> after click on "button" that triggers "addToCartHandlers" function 
    //  that is in <HomeContainer />  mapDispatchToProps()


    // console.warn("action", data);
    // console.log("action", data);

    return {
        // imp. "type" always say's our data is related to which -> addToCart, removeToCart, userLogin, ...
        // therefor, "type" simply defines the data type. 
        type: Add_To_Cart,
        data: data
    };
};


// export const removeToCart = (data) => {
//     return {
//         type: 'remove_To_Cart',
//         data: data
//     };
// };