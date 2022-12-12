import React, {  useEffect, useState } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import style from './ItemCount.module.css'

export const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0)
  
//   const click = () => {
//    setCount(count +1)
//    setCount(count -1)
  
 
// }

/* useEffect(()=>{
 getCount().then(res =>{
     setContador(res)
 })
},[])
const getCount = ()=>{
 return new Promise((resolve, reject)=>{
     setTimeout(()=>{
         resolve(ItemCount)
     },2000)
 })
} */
return (
 

   <div className={style.cart}>
    <div className={style.subcart}>
       <button 
       onClick={() => setCount(count+1) } disabled={count===stock} className='btn boton__aumentar m-1'>+</button>
        <strong className='contador' >{count}</strong>
        <button 
        onClick={() => setCount(count -1)} disabled={count ===0} className='btn boton__disminuir m-1'>-</button>
        <button 
        onClick={() => setCount(0)}  className='btn boton__reset m-1'>Add to cart</button>
    </div>
   </div>
  )
}