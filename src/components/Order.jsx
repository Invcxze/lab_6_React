import React from "react";
export default function Order({order}){
    return(<div className="order_lst">
        <h1>Заказ</h1>
        {order.map((item)=>{
            return(<li>
                <b>{item.name} - {item.quantity}</b>
                </li>
            )
        })}
    </div>
    )
}