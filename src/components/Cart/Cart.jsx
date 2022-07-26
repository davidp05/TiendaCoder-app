import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import CartForm from '../CartForm/CartForm';

const Cart = () => {
    const { products, deleteProduct, calcularTotal, comprador } = useContext(CartContext);

        const finalizaCompra = () => {
            const ventasCollection = collection(db, 'ventas');
            addDoc(ventasCollection, {
                datosComprador: [{comprador}],
                items: [{products}],
                date: serverTimestamp(),
                total: calcularTotal(),
            });
            console.log(finalizaCompra);
        };


    if (products.length === 0) {
        return (
            <>
            <h2>No hay productos, ve a comprar <Link to='/'>acá</Link></h2>
            </>
            ) 
        }

    return (
        <div>
            <div>
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            display: 'flex',
                            border: '2px solid black',
                            margin: '10px',
                            padding: '10px',
                        }}
                    >
                        <div>
                            <img src={product.img} width="70px" alt="product" />
                        </div>
                        <h2>Producto:{product.name}</h2>
                        <br/>
                        <h2> ${product.precio}</h2>
                        <br/>
                        <h2>Cantidad: {product.qty}</h2>
                        <br/>
                        <button onClick={() => deleteProduct(product.id)}>
                            Delete
                        </button>
                    </div>
                ))}
                <h3>Total: $ {calcularTotal()} </h3>
                <CartForm/>
                <button onClick={finalizaCompra}>Finalizar compra</button>
            </div>
        </div>
    );
};

export default Cart;