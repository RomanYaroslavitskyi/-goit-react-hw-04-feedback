import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const StatisticsList = ({ total, positivePercentage, ...options }) => {
  return (
    <ul className={s.statistics__list}>
      {Object.entries(options).map(([key, value]) => {
        return (
          <li className={s.statistics__item} key={key}>
            <p className={s.statistics__text}>
              <span className={s.statistics__span}>{key}</span> : {value}
            </p>
          </li>
        );
      })}
      <li className={s.statistics__item}>
        <p className={s.statistics__text}>
          <span className={s.statistics__span}>total</span> : {total}
        </p>
      </li>
      <li className={s.statistics__item}>
        <p className={s.statistics__text}>
          <span className={s.statistics__span}>positive Percentage</span> :
          {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};

export default StatisticsList;

StatisticsList.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
