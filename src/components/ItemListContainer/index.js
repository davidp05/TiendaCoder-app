import React, { useEffect, useState } from 'react'
import "./styles.css"
import ItemList from '../../components/ItemList/ItemList'
import { getData } from '../../mooks/fakeApi'

const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([])
  const [loading, setLoading]=useState(true)

  //tratar la promesa con try cathc finally 
  const getProducts = async () => {
    try{
      const respuesta = await getData
      setProductList(respuesta)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])

return (
  <div>
    <h1>{greeting}</h1>
    {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
  </div>
)
}

  // return (
  //   <div className='landing'>
  //       <span>{greeting}</span>
  //       <ItemList productList={productList}/>
  //       </div>
  // )


export default ItemListContainer