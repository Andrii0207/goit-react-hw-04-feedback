import Options from './Options/Options';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

export const App = () => {
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
};
