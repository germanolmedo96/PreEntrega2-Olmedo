import React from 'react'
import { Link } from 'react-router-dom'
import  {ItemCount}  from '../ItemCount/ItemCount'
import style from '../ItemDetail/ItemDetail.module.css'

export const ItemDetail = ({itemD}) => {
    const onAdd = (cantidad) => {
        console.log(`se ha agregado ${cantidad} `)
    }
  return (
    <div className={style.detail}>
        <h1>{itemD.name}</h1>
        <div className={style.border}>
        <img src={itemD.image}/>
        <h3>category: {itemD.category}</h3>
        <h3>Price: ${itemD.price}</h3>
        </div>
        <div className="sub">
        <ItemCount stock={itemD.stock} initial={0} onAdd={onAdd}/>
        </div>
    </div>
  )
}