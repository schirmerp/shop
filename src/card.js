import React from "react";

export default function Card (props){
    return (
        <div className="card">
            
            <h2 className="item-title">{props.title}</h2>
            <img src={props.src} alt={props.alt}/>
            $<span className="item-price">{props.price}</span>
            <p className="item-description">{props.description}</p>
            <form className="form" onSubmit={props.onSubmit}>
            <input name="amount" id="item-amount" type="number" placeholder="enter amount" />
            <button onClick={props.onClick}>Add to Cart</button>
            </form>
        </div>
    )
}