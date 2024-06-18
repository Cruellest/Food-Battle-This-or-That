import React, { useState, useEffect } from 'react';
import Category from './category';
import { useNavigate } from 'react-router-dom';

function General() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setCategories([{ strCategory: 'Random', strCategoryThumb: 'data:image/png;base64,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' }, ...data.categories]);
    };
    
    fetchCategories();
  }, []);

  return (
    <div>        
      <div className="container text-center" id="image">
        <img id="tittle-all" src="../src/assets/tittleBlack.png" alt="Login Title" />
      </div>
      <div className="container text-center" id="group-category">
        <h2>CATEGORIES</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {categories.map(category => (
            <div className="col" key={category.strCategory}>
              <Category category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default General;
