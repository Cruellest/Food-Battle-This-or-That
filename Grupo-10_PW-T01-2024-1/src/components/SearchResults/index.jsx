import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import loginTitle from "../../assets/tittleBlack.png";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate('')
  

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      const filteredCategories = data.categories.filter(category => 
        category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCategories(filteredCategories);
      setLoading(false);
    };

    fetchCategories();
  }, [searchTerm]);

  return (
    <div className="container">
      <h2>Search Results for "{searchTerm}"</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row rounded">
          {categories.map(category => (
            <div key={category.idCategory} className="col-md-4">
              <div className="card">
                <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory} />
                <div className="card-body">
                  <h5 className="card-title">{category.strCategory}</h5>
                  <p className="card-text">{category.strCategoryDescription}</p>
                  <button onClick={()=>Navigate(`/Play/${category.strCategory}`)} className="btn btn-warning">Play this category</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
