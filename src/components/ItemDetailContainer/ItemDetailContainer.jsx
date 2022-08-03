import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getProd } from '../../mooks/fakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../firebase/firebase'
import { getDoc, collection, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

            useEffect(()=>{
                const productsCollection = collection(db, 'productos');
                const refDoc = doc(productsCollection, id)
  
                getDoc(refDoc)
                .then(result =>{
                  setProduct({
                    id: result.id,
                    ...result.data(),
                    })
                  })
                .catch(error => {
                  console.log(error)
                })
                .finally(()=>{
                  setLoading(false)
                })
              },[id]);

    return (
        
        <div>
            {loading 
            ? 
            <h2>Cargando...</h2>
            : 
            <ItemDetail product={product} />}
        </div>
    );
}

export default ItemDetailContainer;