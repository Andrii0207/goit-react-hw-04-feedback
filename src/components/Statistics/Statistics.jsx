import React from 'react';

function Statistics() {
  return (
    <div>
      <h2 className="statisticsTitle">Statistics</h2>
      <ul className="statisticsList">
        <li>Good: </li>
        <li>Neutral: </li>
        <li>Bad: </li>
      </ul>
      <ul className="statisticsResult">
        <li>Total: </li>
        <li>Positive feedback: </li>
      </ul>
    </div>
  );
}

export default Statistics;
