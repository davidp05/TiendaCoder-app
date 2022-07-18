import { createContext, useEffect, useState } from "react"
import React from 'react'

export const CartContext = createContext();
const { Provider } = CartContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);
    
    const getQtyProducts = () => {
        let qty = 0;
        products.forEach(product => qty += product.qty);
        setQtyProducts(qty)
    };
    
    useEffect(() => {
        getQtyProducts();
    }, [products])

    const addProduct = (product) => {
    if(isInCart(product.id)){
        const found = products.find(p => p.id === product.id);
        const index = products.indexOf(found);
        const aux = [...products];
        aux[index].qty += product.qty;
        setProducts(aux);
    }else{
        setProducts([...products, product]);
    };
    // getQtyProducts();
    };

    const deleteProduct = (id) => {
        const arrayFiltrado = products.filter(product => product.id !== id);
        setProducts(arrayFiltrado);
        getQtyProducts();
    };

    const isInCart = (id) => {
        const found = products.find(product => product.id === id);
        return found ? true : false;
    };


    const clear = () => {
        setProducts([]);
        setQtyProducts(0);
    };

    const calcularTotal = () => {
        let count = 0
        products.forEach((prod) => {
            count += prod.qty * prod.precio
        });
        return count
    };

    return (
      <Provider value={{products, clear, isInCart, deleteProduct, addProduct, qtyProducts, calcularTotal}}>{children}</Provider>
    )
  } 

export default CartCustomProvider