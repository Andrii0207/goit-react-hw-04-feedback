import { useState } from 'react';
import Options from './Options/Options';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / countTotalFeedback()) * 100);
  };

  const onClickBtnFeedback = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

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
