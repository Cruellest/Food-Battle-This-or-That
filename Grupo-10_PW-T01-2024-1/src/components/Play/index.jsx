import React from 'react'
import Food from './food';
import Ranking from './ranking';

function Play() {
return (
    <div>        
        <div className="container text-center" id="image">
          <img id="tittle-all" src="../src/assets/tittleBlack.png" alt="Login Title" />
        </div>
        <div className="container text-center" id="group-category">
        <h2>WHO WINS?</h2>
                <div class="row align-items-center">
                  <div class="col" id="play-content">
                    <Food />
                  </div>
                  <div class="col" id="play-content">
                    <Food />
                  </div>
                </div>
        </div>
        <div className="container text-center" id="group-category">
          <Ranking />
        </div>
    </div>
    
  );
}

export default Play;