import React, { useState, useEffect } from 'react';
import { getFirestore, collection, orderBy, limit, getDocs } from 'firebase/firestore';

function Ranking({ category }) {
  const [rankings, setRankings] = useState([]);

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
    };

    fetchRankings();
  }, [category]);

  return (
    <div>
      <div className="container text-center" id="group-category">
        <h2>FOODS RANKING</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Food</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
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
