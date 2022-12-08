import React from 'react';

function Statistics({ total, positivePercentage, good, neutral, bad }) {
  return (
    <div>
      <h2 className="statisticsTitle">Statistics</h2>
      <ul className="statisticsList">
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul className="statisticsResult">
        <li>Total: {total()}</li>
        <li>Positive feedback: {positivePercentage()} %</li>
      </ul>
    </div>
  );
}

export default Statistics;
