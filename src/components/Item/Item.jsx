import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import './item.css'

//Tarjeta del producto

const Item = ({product}) => {

  const {products} = useContext(CartContext);
  const isInCart = products.some((prod) => prod.id === product.id);

  const {img, name, description, id} = product

  return (
    <div className="card">
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <h1 className="card-text">{name}</h1>
        <p className="card-text">{description}</p>
    </div>
    <Link to={`/detail/${id}`} className='btn btn-primary'>Ver más</Link>
    {isInCart && <h2>Ya se encuentra en el carrito</h2>}
  </div>
  )
}

export default Item