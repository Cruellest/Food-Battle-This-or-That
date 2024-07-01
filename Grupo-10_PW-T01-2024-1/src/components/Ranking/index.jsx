import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import axios from 'axios'
import loginTitle from "../../assets/tittleBlack.png";

function Ranking({ category }) {
  const [rankings, setRankings] = useState([]);
  const [mealImages, setMealImages] = useState({});

  useEffect(() => {
    const fetchRankings = async () => {
      const db = getFirestore();
      const mealsRef = collection(db, 'meals');
      const querySnapshot = await getDocs(mealsRef);

      // Filter meals by category and sort by votes in descending order
      const items = querySnapshot.docs
        .map(doc => doc.data())
        .filter(item => item.category === category)
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 20);

      setRankings(items);

      // Fetch meal images from MealDB API
      const images = {};
      await Promise.all(items.map(async (item) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item.name}`);
        if (response.data.meals) {
          images[item.name] = response.data.meals[0].strMealThumb;
        }
      }));
      setMealImages(images);
    };

    fetchRankings();
  }, [category]);

  return (
    <div className="ranking-container">
      <div className="container text-center" id="image">
        <img id="tittle-all" src={loginTitle} alt="Sign-in Title" />
      </div>
      <div className="container text-center" id="group-category">
        <h2>FOODS RANKING</h2>
        <table className="table rounded">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Food</th>
              <th scope="col">Image</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  {mealImages[item.name] ? (
                    <img src={mealImages[item.name]} alt={item.name} className="meal-image" />
                  ) : (
                    'Loading...'
                  )}
                </td>
                <td>{item.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
