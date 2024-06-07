import React from 'react'

function Landing() {
  return (
    <div class="container-fluid" id="landing">
        <div class="container text-center" id="landing-content">
            <img id="tittle" src='../src/assets/tittle.png'/>  
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

export default Landing;