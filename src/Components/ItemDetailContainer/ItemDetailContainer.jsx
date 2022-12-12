import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../../mock/products'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import style from '../ItemDetailContainer/ItemDetailContainer.module.css'

export const ItemDetailContainer = () => {
    const {idProd} = useParams()
    const[itemD, setItemD] = useState({})
    const [loading, setLoading] = useState(true);
    const getProduct=()=> new Promise((res,rej)=>{
        setTimeout(()=>res(products.find(p=>p.id == idProd)), 2000)
    })
    console.log(itemD)
    useEffect(()=>{
        getProduct()
        .then(response=>setItemD(response))

        // return () => setItemD([]) //limpio el valor anterior
    },[])
  return (
    <div className={style.iD}>
        {
            //    itemD.length > 0 ?
               <ItemDetail itemD={itemD}/>
            //    :
            //    <h1>Cargando...</h1>

        }
    </div>
  )
}
