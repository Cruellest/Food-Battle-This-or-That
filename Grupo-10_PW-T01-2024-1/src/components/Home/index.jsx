import React from 'react'

function Home() {
  return (
    <div class="container-fluid" id="landing">
        <div class="container-md text-center" id="landing-content">
            <img id="tittleLanding" src='../src/assets/tittleWhite.png'/>  
            <div class="row" id="row-landing">
                <div class="container text-center">
                    Which dish deserves to win this battle?
                </div>
            </div>
            <div class="row" id="row-landing">
                <div class="container text-center">
                <button type="button" class="btn btn-warning" style={{ fontWeight: 'bolder' }}>Start</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;