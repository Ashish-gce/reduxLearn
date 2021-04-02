import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const iconSize = {
    width: 60,
    height: 60,
};


// V. V. Imp. 
//  In Redux, <Home /> Component is not using directly in our project
//  So, Home component is create here and export them into "Containers"-'HomeContainrer.js' and from importinto "App.js" file.

function Header(props) {

    //    v.v.v. imp. => as we know <Home /> Component is how connected  through  <HomeContainer />  in which we pass an "Action"
    //  So, now we want "addToCart()" function in <Home /> Component as an props from <HomeContainer /> Component
    //  That's why after button click we call them in this file.

    //  i.e.:  "addToCartHandler"

    console.log("Home", props.data)


    return (
        <>
            <div className="add-to-cart">

                {/* this simply show the length of the data (number of product's) that we're added in shopping cart */}
                <span className="cartCount">{props.data.length}</span>
                <AddShoppingCartIcon style={iconSize} />
            </div>

        </>
    );
}

export default Header;