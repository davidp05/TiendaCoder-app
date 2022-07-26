import React from 'react'
import { useState } from 'react';

const CartForm = () => {

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

  return (
    <div>
      <form>
          <input type='text' placeholder='Coloque su nombre' name='nombre' onChange={cambiarDatos}></input>
          <input type='text' placeholder='Coloque su apellido' name='apellido' onChange={cambiarDatos}></input>
      </form>
    </div>
  )
}

export default CartForm