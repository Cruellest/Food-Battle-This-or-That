import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import './index.css';
 
function App() {
    return (
        <>
            <div class="container-fluid" id="scream">
                <div>
                    <Header />
                </div>
                <div id="content">
                    <Landing />
                </div>
            </div>
        </>
    );
}
export default App;
