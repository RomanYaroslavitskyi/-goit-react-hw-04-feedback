import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackList = ({ state, onClickBtn }) => {
  return (
    <ul className={s.feedback__list}>
      {Object.keys(state).map(el => {
        return (
          <li className={s.feedback__item} key={el}>
            <button
              className={s.feedback__btn}
              type="button"
              name={el}
              onClick={onClickBtn}
            >
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackList;

FeedbackList.propTypes = {
  state: PropTypes.exact({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
