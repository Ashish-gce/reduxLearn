//  connect both react and redux
import { connect } from 'react-redux';
// here we import "Action.js"
// here we're importing "addToCart" from "Action.js"
import { addToCart } from '../services/Actions/Action';

// V. V. Imp. 
//  In Redux, <Home /> Component is not using directly in our project
//  We use this from "Container" ( i.e.: responsible for 'connection' b/w "Components" and "Services ") folder
//  So, 1st we send "Home" Component to 'container' and then we import them from there.

import Home from '../Components/Home';

//  Now, we are going to use "mapStateToProps" and "mapDispatchToProps"
const mapStateToProps = state => ({

    // we use this "mapStateToProps" to send the data anyWhere that you want ex.- like we want to send the data (Show the data)
    //  in the  shopping cart  that show how many product's that we're adding and remove.

    // cardData: state

    // below o/p trim the variable herirachy in comparision to above o/p
    // data: state.CardItems.cardData

    // since, to get multiple items we need to remove "cardData" from above line of code.
    data: state.CardItems


})
const mapDispatchToProps = dispatch => ({

    // since, addToCart(data) is function that pass data.
    // therefor, "addToCartHandler()" is a function, that calls from react Component that contains a "data" as a parameter and  'addToCart(data)' action
    addToCartHandler: data => dispatch(addToCart(data))
})


// In early call we pass (Home) <Home /> Componemt, because all of these perform on/from Home page.
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
