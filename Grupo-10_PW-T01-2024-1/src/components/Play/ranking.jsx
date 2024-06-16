import React from 'react'
import Category from './category';

function Ranking() {
return (
    <div>        
        <div className="container text-center" id="image">
          <img id="tittle-all" src="../src/assets/tittleBlack.png" alt="Login Title" />
        </div>
        <div className="container text-center" id="group-category">
            <h2>CATEGORIES</h2>
                <div class="row align-items-end">
                  <div class="col">
                    <Category />
                  </div>
                  <div class="col">
                    <Category />
                  </div>
                  <div class="col">
                    <Category />
                  </div>
                </div>

                <div class="row align-items-end">
                  <div class="col">
                    <Category />
                  </div>
                  <div class="col">
                    <Category />
                  </div>
                  <div class="col">
                    <Category />
                  </div>
                </div>

                <div class="row align-items-end">
                  <div class="col">
                    <Category />
                  </div>
                  <div class="col">
                    <Category />
                  </div>
                  <div class="col">
                    <Category />
                  </div>
                </div>
        </div>
  </div>
    
  );
}

export default Ranking;