import Options from './Options/Options';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div className="feedbackWrapper">
      <h1 className="title">Please leave feedback</h1>
      <Options />
      <Statistics initialValueGood={10} />
    </div>
  );
};
