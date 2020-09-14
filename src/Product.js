import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,
                title,
                image,
                price
            }
        })

    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(()=>{
                        return <span role="img" aria-label="icon">⭐</span>
                    })}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
