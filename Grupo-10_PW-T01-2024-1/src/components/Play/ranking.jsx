import React from 'react'

function Ranking() {
return (
    <div>        
        <div className="container text-center" id="group-category">
            <h2>CATEGORY RANKING</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Food</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Name</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Name</td>
                </tr>
              </tbody>
            </table>
        </div>
  </div>
    
  );
}

export default Ranking;