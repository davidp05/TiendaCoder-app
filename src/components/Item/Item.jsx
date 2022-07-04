import React from 'react'
// import { Link } from 'react-router-dom'

//Tarjeta del producto

const Item = ({product}) => {

  const {img, name, description} = product

  return (
    <div className="card" style={{margin: '10px 20px',
    border: '2px solid black',
    width: '40%',}}>
    <img style={{height: '300px', width: '300px'}}src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    </div>
    <button className='btn btn-primary'>Ver más</button>
</div>
  )
}

export default Item