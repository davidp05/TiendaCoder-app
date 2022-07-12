import React, { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
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
        <div className="count">
            <div className="buttons">
                <button onClick={add}>+</button>
                <p>{count}</p>
                <button onClick={substract}>-</button>
            </div>
            <div className="add-cart">
                <button>Add to Cart!</button>
            </div>
        </div>
    );
};

export default ItemCount;