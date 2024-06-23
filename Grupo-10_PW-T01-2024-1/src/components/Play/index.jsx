import React, { useState, useEffect, useCallback, useRef } from 'react';
import Food from './food';
import { useParams, useNavigate } from 'react-router-dom';

function Play() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [preloadedMeals, setPreloadedMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const initialLoad = useRef(true);
  const [votingInProgress, setVotingInProgress] = useState(false); // New state

  const fetchMeals = async () => {
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
    return shuffledMeals;
  };

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  const preloadMealImages = async (meals) => {
    const imagePromises = meals.map(meal => preloadImage(meal.strMealThumb));
    await Promise.all(imagePromises);
  };

  const preloadMeals = useCallback(async () => {
    setLoading(true);
    try {
      const mealsData = await fetchMeals();
      const nextMeals = mealsData.slice(0, 10);  // Preload more meals
      await preloadMealImages(nextMeals);
      setPreloadedMeals(nextMeals);
      if (initialLoad.current) {
        setMeals(nextMeals.slice(0, 2));
        initialLoad.current = false;
      }
    } catch (error) {
      console.error('Error preloading meals:', error);
    } finally {
      setLoading(false);
    }
  }, [category]);

  const handleVote = async () => {
    if (votingInProgress) return; // Prevent multiple rapid clicks
    setVotingInProgress(true); // Set voting in progress

    try {
      const remainingMeals = preloadedMeals.slice(2);
      setMeals(remainingMeals.slice(0, 2));

      if (remainingMeals.length <= 2) {
        const additionalMeals = await fetchMeals();
        const combinedMeals = [...remainingMeals, ...additionalMeals.slice(0, 10 - remainingMeals.length)];
        await preloadMealImages(combinedMeals);
        setPreloadedMeals(combinedMeals);
      } else {
        setPreloadedMeals(remainingMeals);
      }
    } catch (error) {
      console.error('Error handling vote:', error);
    } finally {
      setVotingInProgress(false); // Reset voting in progress
    }
  };

  useEffect(() => {
    preloadMeals();
  }, [category, preloadMeals]);

  return (
    <div>
      <div className="container text-center" id="image">
        <img id="tittle-all" src="/src/assets/tittleBlack.png" alt="Login Title" />
      </div>
      <div className="container text-center" id="group-category">
        <h2>WHO WINS?</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row align-items-center">
            {meals.map(meal => (
              <div className="col" id="play-content" key={meal.idMeal}>
                <Food meal={meal} onVote={handleVote} votingInProgress={votingInProgress} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container text-center" id="group-category">
        <button className='btn btn-warning' onClick={() => navigate('/Ranking')} style={{ fontWeight: 'bolder' }}>Finalize</button>
      </div>
    </div>
  );
}

export default Play;
