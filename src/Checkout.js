import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    const removeProduct = (id) => {
        console.log(id)
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        })
    }

    return (
        <div className="checkout">
            <div className="checkout__left">
                <Link to="/">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner" />
                </Link>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    
                    {basket.map(item => {
                        return <CheckoutProduct {...item} removeProduct={removeProduct}/>
                    })}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
