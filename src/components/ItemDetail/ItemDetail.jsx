import React from 'react';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import styles from './itemDetail.modules.css'


const ItemDetail = ({product}) => {
    const {addProduct} = useContext(CartContext)
    const [buyFinalized, setBuyFinalized] = useState(false);

    const onAdd = (count) => {
        addProduct({...product, qty: count});
        setBuyFinalized(true);
    };



    return (
        <div className={styles.parent}>
            <div className={styles.parent}>
                <img  src={product.img} className={styles.imagen} alt={product.name} />
            </div>
            <div className={styles.box}> 
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.precio}</h3>
                <h4>Stock:{product.stock}</h4>
            </div>
                <div>
                    {buyFinalized 
                    ? 
                    <Link to="/cart">
                        <button className={styles.buttons}>Finalizar compra</button>
                    </Link> 
                    : 
                    < ItemCount initial={1} stock={product.stock} onAdd={onAdd} /> }
                </div>
            </div>
    );
};

export default ItemDetail;
