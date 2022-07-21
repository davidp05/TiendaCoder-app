import React, { useEffect, useState } from 'react'
import "./styles.css"
import ItemList from '../../components/ItemList/ItemList'
// import { getProds } from '../../mooks/fakeApi'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([])
  const [loading, setLoading]=useState(false)

  //console.log(db);

  const { categoryId } = useParams()

  

  // getProds(categoryId)
  //           .then((res) => {
  //               setProductList(res);
  //           })
  //           .catch((error) => {
  //               console.log(error);
  //           })
  //           .finally(() => {
  //               setLoading(false);
  //           });
            
            useEffect(()=>{
              const productsCollection = collection(db, 'productos');
              const q = query(productsCollection, where('category' == 'apple'));

              getDocs(q)
              .then(result =>{
                const lista = result.docs.map(product => {
                  return {
                    id: product.id,
                    ...product.data(),
                  }
                });
                setProductList(lista);
              
              });
              .catch(error => {
                console.log(error);
              });
              .finally(()=>{
                setLoading(false);
              })
            },[categoryId]);
            
            return (
              <div>
                  <h1>{greeting}</h1>
                  {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
              </div>
)}
//tratar la promesa con try cathc finally 
// const getDocs(q) = async () => {
//   try{
//     const lista = await result.docs.map(product => {
//     return {
//     id: product.id,
//      ...product.data(),
//      }
//      });
//     setProductList(lista)
//   }catch(error){
//     console.log(error)
//   }finally{
//     setLoading(false)
//   }
// }, [categoryId]

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