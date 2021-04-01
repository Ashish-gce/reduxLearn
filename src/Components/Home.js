import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Home() {
    return (
        <>
            <div className="add-to-cart">
                <AddShoppingCartIcon />
            </div>
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
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </>
    );
}

export default Home;