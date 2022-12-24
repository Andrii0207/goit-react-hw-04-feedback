import { useState } from 'react';
import Options from './Options/Options';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(2);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);

  const options = ['good', 'neutral', 'bad'];
  console.log(options);

  function countTotalFeedback() {
    const total = good + neutral + bad;
    console.log(total);
    return total;
  }

  function countPositiveFeedbackPercentage() {
    const resultPositiveCount = parseInt((good / countTotalFeedback()) * 100);
    console.log(resultPositiveCount);
    return resultPositiveCount;
  }

  function onClickBtnFeedback(options) {
    console.log(options);
    switch (options) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        return;
    }
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <Options onClick={onClickBtnFeedback} options={options} />
      </Section>
      <Section>
        {countTotalFeedback() ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}
