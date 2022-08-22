import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.statistics}>
      <h2 className={s.feedback__title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
