import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Component/Home";
import { ToastContainer } from "react-toastify";


function Router() {

  return (
    <div>
    <ToastContainer theme="colored"></ToastContainer>
        <BrowserRouter>
      
            <Routes>
                <Route exact path="/" element={<Home />} />
              
            
            </Routes>
          
        </BrowserRouter>
    
    </div>
  )
}

export default Router;