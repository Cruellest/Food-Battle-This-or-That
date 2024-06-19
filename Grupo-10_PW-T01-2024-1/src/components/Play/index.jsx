import React, { useState, useEffect } from 'react';
import Food from './food';
import { Navigate, useParams, useNavigate } from 'react-router-dom';

function Play() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate('');

  const fetchMeals = async () => {
    setLoading(true); // Indicate loading state
    let mealsData = [];
    
    if (category === 'Random') {
      const categoriesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const categoriesData = await categoriesResponse.json();

      const allMealsPromises = categoriesData.categories.map(async (cat) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat.strCategory}`);
        const data = await response.json();
        return data.meals;
      });

      const allMeals = await Promise.all(allMealsPromises);
      mealsData = allMeals.flat();
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      mealsData = data.meals;
    }

    const shuffledMeals = mealsData.sort(() => 0.5 - Math.random());
    setMeals(shuffledMeals.slice(0, 2));
    setLoading(false); // End loading state
  };

  useEffect(() => {
    fetchMeals();
  }, [category]);

  return (
    <div>        
      <div className="container text-center" id="image">
        <img id="tittle-all" src="../src/assets/tittleBlack.png" alt="Login Title" />
      </div>
      <div className="container text-center" id="group-category">
        <h2>WHO WINS?</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row align-items-center">
            {meals.map(meal => (
              <div className="col" id="play-content" key={meal.idMeal}>
                <Food meal={meal} onVote={fetchMeals} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container text-center" id="group-category">
        <button className='btn btn-warning ' onClick={() => Navigate('/Ranking')} style={{ fontWeight: 'bolder' }}>Finalize</button>
      </div>
    </div>
  );
}

export default Play;
  