import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Category() {
const navigate = useNavigate("");

return (
    <div>        
        <div className="container-sm" id="category">
            <div className="container-sm" id="category-content">
                <div class="container-sm" id="food-small">
                    <img class="rounded" id="img-small" src="../src/assets/image.png"/>
                </div>
                <div className="container-sm" id="login-form">
                <button type="button" className="btn btn-dark" style={{ fontWeight: 'bolder', background: 'black', color: '#ffc107'}} onClick={() =>navigate("/Play")}>
                  NAME
                </button>
              </div>
            </div>
        </div>
  </div>
    
  );
}

export default Category;