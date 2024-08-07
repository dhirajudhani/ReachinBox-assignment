import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {

  return (
    <div> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profile" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
