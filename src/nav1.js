import React from "react";
import { Link, Routes, Route} from "react-router-dom";
import Shop from "./shop";
import App from "./App";

function Nav(){
    return(
        <div>
        <nav className="nav">
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="./shop">
                     <li>Shop</li>
                </Link>
                
            </ul>
        </nav>
        <Routes>
            <Route exact path="/">
                <App/>
            </Route>
            <Route exact path="./shop">
                <Shop />
            </Route>
        </Routes>
        </div>
    )
}

export default Nav