import React, { useEffect, useState } from 'react'
import "./styles.css"
import ItemList from '../../components/ItemList/ItemList'
import { getProds } from '../../mooks/fakeApi'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([])
  const [loading, setLoading]=useState(true)

  const { categoryId } = useParams()


  getProds(categoryId)
            .then((res) => {
                setProductList(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
            
            useEffect(()=>{
              getProds()
            },[categoryId])
            
            return (
              <div>
    <h1>{greeting}</h1>
    {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
  </div>
)

}

//tratar la promesa con try cathc finally 
// const getProducts = async () => {
//   try{
//     const respuesta = await getProds
//     setProductList(respuesta)
//   }catch(error){
//     console.log(error)
//   }finally{
//     setLoading(false)
//   }
// }

// return (
  //   <div className='landing'>
  //       <span>{greeting}</span>
  //       <ItemList productList={productList}/>
  //       </div>
  // )


export default ItemListContainer