import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, removeProduct }) {
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((item) => (
              <span role="img" aria-label="icon">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={() => removeProduct(id)}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
