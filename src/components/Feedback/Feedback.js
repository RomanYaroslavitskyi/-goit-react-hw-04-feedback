import { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackList from './FeedbackList';
import StatisticsList from './StatisticsList';
import Section from './Section';
import Notification from './Notification';
import s from './Feedback.module.css';

function Feedback({ onVisible, visible }) {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const clickOnBtn = ({ target: { name } }) => {
    onVisible(true);

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.floor((good * 100) / total);

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackList
          state={['good', 'bad', 'neutral']}
          onClickBtn={clickOnBtn}
        />
      </Section>
      <Section title="Statistics">
        {!visible ? (
          <Notification message="No feedback given" />
        ) : (
          <StatisticsList
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={total > 0 ? positivePercentage : 0}
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;

Feedback.propTypes = {
  onVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
