import React from 'react';

const ItemDetail = ({product}) => {
    return (
        <div className="detail">
            <div> 
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.precio}</h3>
                <h4>Stock:{product.stock} </h4>
            </div>
        </div>
    );
};

export default ItemDetail;