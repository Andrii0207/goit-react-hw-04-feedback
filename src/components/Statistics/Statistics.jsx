import React from 'react';
import css from './Statistics.module.css';

function Statistics({ total, positivePercentage, good, neutral, bad }) {
  return (
    <div>
      <h2 className={css.statisticsTitle}>Statistics</h2>
      <ul className="statisticsList">
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul className="statisticsResult">
        <li className={css.total}>Total: {total()}</li>
        <li className={css.positive}>Positive feedback: {positivePercentage()} %</li>
      </ul>
    </div>
  );
}

export default Statistics;
