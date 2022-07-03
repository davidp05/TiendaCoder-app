import React from 'react'
import { useCard } from '../../hooks/useCard'
import Imagen from '../../assets/images/smartwatch.jpg'
import "./styles.css"

const Card = ({ stock }) => {
  const { count, amount } = useCard(stock)
  return (
    <section className='cards'>
        <h3>
            Nombre del producto
        </h3>
        <img src={Imagen} alt='Card'/>
        <h4>Precio: <span className='price'>200</span></h4>
        <div className='counter'>
          <button onClick={()=>count(-1)}>-</button>
          <span>{amount} • {stock}</span>
          <button onClick={()=>count(+1)}>+</button>
        </div>
    </section>

  )
}

export default Card
