import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./shop";

const RouterSwitch = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterSwitch