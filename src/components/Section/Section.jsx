import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={css.sectionWrapper}>
      {title && <h2 className={css.titleFeedback}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  // title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;
