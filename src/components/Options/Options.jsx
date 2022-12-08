function Options({ good, neutral, bad }) {
  return (
    <ul className="optionsList">
      <li className="good">
        <button type="button" onClick={good}>
          Good
        </button>
      </li>
      <li className="neutral">
        <button type="button" onClick={neutral}>
          Neutral
        </button>
      </li>
      <li className="bad">
        <button type="button" onClick={bad}>
          Bad
        </button>
      </li>
    </ul>
  );
}

export default Options;

// options = { ['good', 'bad', 'neutral']}
// options = { ['good', 'neutral, 'bad'] }
