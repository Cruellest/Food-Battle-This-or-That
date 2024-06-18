import React from 'react';
import { firestore, doc, getDoc, setDoc, updateDoc, increment } from '../../firebaseConnection';

function Food({ meal, onVote }) {
  const handleVote = async () => {
    const mealRef = doc(firestore, 'meals', meal.idMeal);
    const mealSnapshot = await getDoc(mealRef);

    if (mealSnapshot.exists()) {
      await updateDoc(mealRef, {
        votes: increment(1)
      });
    } else {
      await setDoc(mealRef, {
        name: meal.strMeal,
        votes: 1
      });
    }

    // Fetch new meals after voting
    onVote();
  };

  return (
    <div>        
      <div className="container-sm" id="category-big">
        <div className="container-sm" id="category-content-big">
          <div className="container-sm" id="food-big">
            <img className="rounded" id="img-big" src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <div className="container-sm" id="login-form">
            <button 
              type="button" 
              className="btn btn-warning" 
              style={{ fontWeight: 'bolder' }} 
              onClick={handleVote}
            >
              {meal.strMeal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
