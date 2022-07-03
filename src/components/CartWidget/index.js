import React from 'react'
import "./styles.css"
import carrito from '../../assets/images/carrito.png';

const CartWidget = () => {
  return (
    <div>
      <button className="cart-btn">
      <img src={carrito} alt='Cart icon' className="cart-widget" />
      </button>
      <div className="button">
        <span className="button__badge">0</span>
      </div>
    </div>
  );
};

export default CartWidget