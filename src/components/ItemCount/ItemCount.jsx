import React, { useState } from 'react';
import styles from './itemCount.module.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    //Sumar productos
    const add = () => {
        if (count < stock){
            setCount(count+1)
        } else {
            console.log("No hay mas stock disponible")
        }
        //stock !== count && setCount(count + 1);
    };

    //Restar productos
    const substract = () => {
        if (count > initial){
            setCount(count-1)
        } else {
            console.log("Esta es la unidad minima")
        }
        //initial !== count && setCount(count - 1);
    };
    return (
        <div>
            <div className={styles.box}>
                <button className={styles.buttons} onClick={add}>+</button>
                <p>{count}</p>
                <button className={styles.buttons} onClick={substract}>-</button>
                <button className={styles.buttons} onClick={() => onAdd(count)}>Add to Cart!</button>
            </div>
        </div>
    );
};

export default ItemCount;