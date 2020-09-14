import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    const [total, setTotal] = useState({});

    useEffect(() => {
        hitungTotal();

        return () => {
            setTotal({})
        }
    }, [basket])
    
    const hitungTotal = () => {
        let total = 0;

        basket.forEach(item => {
            total += item?.price;
        })
        setTotal({...total, price:total, qty:basket.length});
    }
    return (
        <div className="checkout">
            <div className="checkout__left">
                <Link to="/">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner" />
                </Link>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal totalPrice={total.price} totalItem={total.qty} />
            </div>
        </div>
    )
}

export default Checkout
