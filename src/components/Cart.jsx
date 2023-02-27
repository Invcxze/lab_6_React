import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function Cart({cart, AddOrder ,incrementQuantity, decrementQuantity,handleDelete}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/order");
      };
    return (
        <div className='cart_'>
            <h1>Корзина</h1>
            {cart.map((item) => (
          <li className='pos_crt' key={item.id}>
         <b>{item.name} ({item.quantity})</b>
          <br />
            <button className='btn_cart' onClick={()=>{incrementQuantity(item.id)}}>+</button>
            <button className='btn_cart' onClick={()=>{decrementQuantity(item.id)}}>-</button>
            <button className='btn_cart' onClick={()=>{handleDelete(item.id)}}>Удалить</button>
        </li>
        ))}
        <button className='btn_cart' onClick={()=>{AddOrder();handleClick()}}>Добавить в лист Заказов</button>
        </div>
    )
}