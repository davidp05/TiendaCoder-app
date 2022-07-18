import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


//Tarjeta del producto

const Item = ({product}) => {

  const {products} = useContext(CartContext);
  const isInCart = products.some((prod) => prod.id === product.id);

  const {img, name, description, id} = product

  return (
    <div className="card" style={{margin: '10px 20px',
    border: '2px solid black',
    width: '40%',}}>
    <img style={{height: '300px', width: '300px'}}src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    </div>
    <Link to={`/detail/${id}`} className='btn btn-primary'>Ver más</Link>
    {isInCart && <h2>Ya se encuentra en el carrito</h2>}
  </div>
  )
}

export default Item