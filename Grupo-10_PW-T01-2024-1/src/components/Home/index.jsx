import React from 'react'

function Home() {
  return (
    <div className="container-fluid" id="landing">
        <div className="container-md text-center" id="landing-content">
            <img id="tittleLanding" src='../src/assets/tittleWhite.png'/>  
            <div className="row" id="row-landing">
                <div className="container text-center">
                    Which dish deserves to win this battle?
                </div>
            </div>
            <div className="row" id="row-landing">
                <div className="container text-center">
                <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' }}>START</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;