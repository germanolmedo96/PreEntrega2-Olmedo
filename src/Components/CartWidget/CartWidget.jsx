import React from 'react'
import './CartWidget.css';
import carrito from '../../img/carrito.png'

const CartWidget = ()  => {
  return (
    <div className="carro">
        <img src={carrito}/>
        <div className="uno">
        <p>1</p>
        </div>
         {/* //agregar lodo de carrito con un numero de productos */}
    </div>
  )
}
export default CartWidget;