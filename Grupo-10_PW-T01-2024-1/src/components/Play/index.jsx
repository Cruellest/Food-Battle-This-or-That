import React, { useState, useEffect, useCallback, useRef } from 'react';
import Food from './food';
import { useParams, useNavigate } from 'react-router-dom';
import tittleBlack from "../../assets/tittleBlack.png"

function Play() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [preloadedMeals, setPreloadedMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showVotes, setShowVotes] = useState(false);
  const navigate = useNavigate();
  const initialLoad = useRef(true);
  const votingInProgressRef = useRef(false); // Ref to track voting in progress

  const fetchMeals = async () => {
    let mealsData = [];
    
    try {
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
    } catch (error) {
      console.error('Error fetching meals:', error);
      throw error;
    }
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
    try {
      const imagePromises = meals.map(meal => preloadImage(meal.strMealThumb));
      await Promise.all(imagePromises);
    } catch (error) {
      console.error('Error preloading images:', error);
      throw error;
    }
  };

  const preloadMeals = useCallback(async () => {
    setLoading(true);
    try {
      const mealsData = await fetchMeals();
      const nextMeals = mealsData.slice(0, 100);  // Preload more meals
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
    if (votingInProgressRef.current) return; // Prevent multiple rapid clicks
    votingInProgressRef.current = true; // Set voting in progress
    setShowVotes(true); // Show votes temporarily

    setTimeout(async () => {
      try {
        const remainingMeals = preloadedMeals.slice(2);

        // Preload images of new meals before updating the state
        await preloadMealImages(remainingMeals.slice(0, 2));

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
        votingInProgressRef.current = false; // Reset voting in progress
        setShowVotes(false); // Hide votes after update
      }
    }, 2000); // 2 seconds delay to show the votes
  };

  useEffect(() => {
    preloadMeals();
  }, [category, preloadMeals]);

  return (
    <div>
      <div className="container text-center" id="image">
        <img id="tittle-all" src={tittleBlack} alt="Tittle Black" />
      </div>
      <div className="container text-center" id="group-category">
        <h2>WHO WINS?</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <center><div className="row row-cols-1 row-cols-md-2 g-4">
            {meals.map(meal => (
              <div className="col" id="play-content" key={meal.idMeal}>
                <Food meal={meal} key={meal.idMeal} onVote={handleVote} showVotes={showVotes} votingInProgress={votingInProgressRef.current} />
              </div>
            ))}
          </div></center>
        )}
        <div className="container text-center" id="final">
          <button className='btn btn-warning' onClick={() => navigate('/Ranking')} style={{ fontWeight: 'bolder' }}>Finalize</button>
        </div>
      </div>
    </div>
  );
}

export default Play;
