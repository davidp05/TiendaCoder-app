import React, { useContext } from 'react'
import "./styles.css"
import carrito from '../../assets/images/carrito.png';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
  const {qtyProducts} = useContext(CartContext);
  return (
    <div>
      <button className="cart-btn">
      <img src={carrito} alt='Cart icon' className="cart-widget" />
      </button>
      <div className="button">
        <span className="button__badge">{qtyProducts}</span>
      </div>
    </div>
  );
};

export default CartWidget