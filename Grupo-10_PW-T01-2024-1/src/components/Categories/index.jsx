import React, { useState, useEffect } from 'react';
import Category from './category';
import { useNavigate } from 'react-router-dom';

function General() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      var response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json();
      setCategories([{ strCategory: 'Random', strCategoryThumb: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2023/11/FEA/71398_ceias.jpg' }, ...data.categories]);
    };
    
    fetchCategories();
  }, []);

  return (
    <div>        
      <div className="container text-center" id="image">
        <img id="tittle-all" src="../src/assets/tittleBlack.png" alt="Login Title" />
      </div>
      <div className="container text-center" id="group-category">
        <h2>{categories != '' ? "CATEGORIES" : 'LOADING...'}</h2>
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
