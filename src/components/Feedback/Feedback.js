import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackList from './FeedbackList';
import StatisticsList from './StatisticsList';
import Section from './Section';
import Notification from './Notification';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnBtn = ({ target: { name } }) => {
    this.props.onVisible(true);

    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
  };

  render() {
    const { state, clickOnBtn } = this;
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.floor((good * 100) / total);

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackList state={state} onClickBtn={clickOnBtn} />
        </Section>
        <Section title="Statistics">
          {!this.props.visible ? (
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
}

export default Feedback;

Feedback.propTypes = {
  onVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
