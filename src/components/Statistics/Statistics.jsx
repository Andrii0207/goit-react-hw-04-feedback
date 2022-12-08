import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
