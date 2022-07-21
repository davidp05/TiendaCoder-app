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

            useEffect(()=>{
              const q = categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) : collection(db, 'productos');

              getDocs(q)
              .then(result =>{
                const lista = result.docs.map(product => {
                  return {
                    id: product.id,
                    ...product.data(),
                  }
                });
                setProductList(lista);
              
              })
              .catch(error => {
                console.log(error)
              })
              .finally(()=>{
                setLoading(false)
              })
            },[categoryId]);
            
            return (
              <div>
                  <h1>{greeting}</h1>
                  {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
              </div>
)}


export default ItemListContainer