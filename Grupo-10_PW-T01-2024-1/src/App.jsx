import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SignIn from "./components/Sign-In";
import General from "./components/Categories";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Play from "./components/Play";

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
                  <Route path="/Sign-In" element={<SignIn />} />
                  <Route path="/Categories" element={<General />} />
                  <Route path="/Play" element={<Play />} />

              </Routes>
            </div>

        </BrowserRouter>

        <div>
          <Footer />
        </div>
    </div>
  );
}
 
export default App;
