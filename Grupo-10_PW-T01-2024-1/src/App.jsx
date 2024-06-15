import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

import React from 'react';
// Importamos o componente BrowserRouter e o componente Routes do pacote react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos as páginas HomePage, AboutPage e ContactPage

// Função principal do componente App
function App() {
  return (
 
    <div class="container-fluid" id="scream">
        <BrowserRouter>
                    
            <div>
                <Header />
            </div>

            <div id="content">
            <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />

            </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}
 
export default App;
