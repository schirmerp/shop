import React, {useState, useEffect} from "react";
import {data} from "./data";
import Card from "./card";
import Nav from "./nav";
import "./App.css"
import Cart from "./cart";

function Shop(match){
    const [total, setTotal] = useState(0)

    const [items, setItems] = useState(0)

    const handleSubmit=(e)=>{
        e.preventDefault()
        //debugger
        var x = Number(e.currentTarget[0].value)
        var y = Number(e.target.parentNode.childNodes[3].firstChild.nodeValue)
        

       if(x > 0){
           
         setTotal(prevState => (x*y) + prevState)
         
         setItems(oldItems => (oldItems + x))
         
        } 
    }
    
    

    return(
        <div className="container">
            <Nav/>
            <Cart 
            items={items}
            total={total}
            />
            {data.map ((data, key)=>{
                return(
                    <Card 
                    className="card"
                    key={key}
                    title={data.item}
                    price={data.price}
                    description={data.description}
                    onSubmit={handleSubmit}
                    src={data.url}
                    />
                )
            })
            }
        </div>
    )
}

export default Shop

