function Options({ onClick, options }) {
  return (
    <ul className="optionsList">
      {/* <li className="good">
        <button type="button" onClick={onClick}>
          Good
        </button>
      </li>
      <li className="neutral">
        <button type="button" onClick={onClick}>
          Neutral
        </button>
      </li>
      <li className="bad">
        <button type="button" onClick={onClick}>
          Bad
        </button>
      </li> */}
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button type="button" name={option} onClick={onClick}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Options;
