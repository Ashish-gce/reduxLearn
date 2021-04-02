import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const iconSize = {
    width: 60,
    height: 60,
};


// V. V. Imp. 
//  In Redux, <Home /> Component is not using directly in our project
//  So, Home component is create here and export them into "Containers"-'HomeContainrer.js' and from importinto "App.js" file.

function Home(props) {

    //    v.v.v. imp. => as we know <Home /> Component is how connected  through  <HomeContainer />  in which we pass an "Action"
    //  So, now we want "addToCart()" function in <Home /> Component as an props from <HomeContainer /> Component
    //  That's why after button click we call them in this file.

    //  i.e.:  "addToCartHandler"

    // console.log("Home", props)


    return (
        <>
            <h2>Home Component</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.taposhop.com/1552-large_default/samsung-galaxy-s20-cloud-blue-128-gb-8-gb-ram.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung-S20
                </span>
                    <span>
                        Price: $1000.00
                </span>
                </div>
                <div className="item">
                    <button
                        onClick={() =>
                            props.addToCartHandler({ price: "$1000.00", name: "Samsung-S20" })
                        }>
                        Add to cart
                    </button>
                    <button className="remove-Cart"
                        onClick={() =>
                            props.removeToCartHandler()
                        }>
                        Remove to cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;