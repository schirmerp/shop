import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./shop";

const RouterSwitch = () =>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default RouterSwitch