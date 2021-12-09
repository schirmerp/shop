import React from "react";

export default function Cart(props){
    return(
        <div className="cart">
            <span className="cart-items">Total items: {props.items}</span>
            <span className="cart-total">Total: $ {props.total}</span>
            <button className="checkout-btn" onClick={props.onClick}>Check Out!</button>
        </div>
    )
}