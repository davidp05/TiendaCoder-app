import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import styles from './Cart.module.css'


const Cart = () => {
    const { products, deleteProduct, calcularTotal } = useContext(CartContext);
    const [idVenta, setIdVenta] = useState("")
    const [compraFinalizada, setCompraFinalizada] = useState(false)
    const [comprador, setComprador] = useState ({
        nombre: '',
        apellido: '',
      });
    
      const cambiarDatos = (event) => {
        setComprador({
          ...comprador,
          [event.target.name] : event.target.value
        });
      };

      const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...')
    }

        const finalizaCompra = () => {
            const ventasCollection = collection(db, 'ventas');
            addDoc(ventasCollection, {
                usuario: comprador,
                items: products,
                date: serverTimestamp(),
                total: calcularTotal(),
            })
            .then((result) => {
                setIdVenta(result.id)
                setCompraFinalizada(true)
            })
        }



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
                    <div className={styles.wrapper}>
                    <div className={styles.vistaProducto}
                        key={product.id}
                    >
                        <div>
                            <img src={product.img} width="70px" alt="product" />
                        </div>
                        <h2>Producto: {product.name} </h2>
                        <br/>
                        <h2> $ {product.precio}</h2>
                        <br/>
                        <h2>Cantidad: {product.qty}</h2>
                        <br/>
                        <button className={styles.buttons} onClick={() => deleteProduct(product.id)}>
                            Delete
                        </button>
                    </div>
                    </div>
                ))}
                <h3>Total: $ {calcularTotal()} </h3>
                <div>
                <form className={styles.form} onSubmit={enviarDatos}>
                    <input type='text' placeholder='Coloque su nombre' name='nombre' onChange={cambiarDatos}></input>
                    <input type='text' placeholder='Coloque su apellido' name='apellido' onChange={cambiarDatos}></input>
                </form>
                </div>
                <div>
                        {compraFinalizada ? <h3>Gracias por si compra, su ID de venta es: {idVenta}</h3> :  <button className={styles.buttons} onClick={finalizaCompra}>Finalizar compra</button> }
                </div>
            </div>
        </div>
    );
};

export default Cart;