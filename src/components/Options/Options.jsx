import css from './Options.module.css';

function Options({ onClick, options }) {
  return (
    <ul className={css.optionsList}>
      {options.map((option, index) => {
        return (
          <li key={index} className={css.feedBackBtn}>
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
