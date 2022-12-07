import React from 'react';

class Statistics extends React.Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h2 className="statisticsTitle">Statistics</h2>
        <ul className="statisticsList">
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
        <ul className="statisticsResult">
          <li>Total: </li>
          <li>Positive feedback:{this.state.good} </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
