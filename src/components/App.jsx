import Options from './Options/Options';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return parseInt((good / this.countTotalFeedback()) * 100);
  };

  onClickBtnFeedback = e => {
    const currentBtn = e.currentTarget.name;
    console.log(currentBtn);
    this.setState(prevState => {
      return { [currentBtn]: prevState[currentBtn] + 1 };
    });
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Options options={['good', 'neutral', 'bad']} onClick={this.onClickBtnFeedback} />
        </Section>
        <Section>
          {this.countTotalFeedback() ? (
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
