import Options from './Options/Options';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Options />
        </Section>
        <Section>
          <Statistics title="Statistics" />
        </Section>
      </div>
    );
  }
}
