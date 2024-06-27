import React, { useState, useEffect } from 'react';
import { firestore, doc, getDoc, setDoc, updateDoc, increment } from '../../services/firebaseConnection';

function Food({ meal, onVote, showVotes, votingInProgress }) {
  const [votes, setVotes] = useState(null);

  useEffect(() => {
    async function fetchVotes() {
      try {
        const mealRef = doc(firestore, 'meals', meal.idMeal);
        const mealSnapshot = await getDoc(mealRef);

        if (mealSnapshot.exists()) {
          const { votes } = mealSnapshot.data();
          setVotes(votes);
        } else {
          setVotes(0);
        }
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    }

    fetchVotes();
  }, [meal.idMeal]);

  const handleVote = async () => {
    if (votingInProgress) return; // Prevent multiple rapid clicks

    try {
      const mealRef = doc(firestore, 'meals', meal.idMeal);
      const mealSnapshot = await getDoc(mealRef);

      if (mealSnapshot.exists()) {
        await updateDoc(mealRef, {
          votes: increment(1)
        });
        setVotes(prevVotes => prevVotes + 1);
      } else {
        await setDoc(mealRef, {
          name: meal.strMeal,
          votes: 1
        });
        setVotes(1);
      }

      // Fetch new meals after voting
      onVote();
    } catch (error) {
      console.error('Error updating votes:', error);
    }
  };

  return (
    <div>        
      <div className="container-sm" id="category-big">
        <div className="container-sm" id="category-content-big">
          <div className="container-sm" id="food-big">
            <img className="rounded" id="img-big" src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <div className="container-sm" id="login-form">
            {!showVotes && (
              <button 
                type="button" 
                className="btn btn-warning" 
                style={{ fontWeight: 'bolder' }} 
                onClick={handleVote}
                disabled={votingInProgress} // Disable button when voting in progress
              >
                {meal.strMeal}
              </button>
            )}
            {showVotes && votes !== null && (
              <h4 style={{color: "#ffc107", fontWeight: "bolder"}}>Votes: {votes}</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
