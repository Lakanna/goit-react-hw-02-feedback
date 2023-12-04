import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = label => {
    this.setState(prevState => {
      return {
        [label]: prevState[label] + 1,
      };
    });
  };

  totalCounter = () => {
    let totalCounter = this.state.good + this.state.neutral + this.state.bad;
    return totalCounter;
  };

  positiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / this.totalCounter()
    );
    return positiveFeedbackPercentage;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalCounter()}
          positivePercentage={this.positiveFeedbackPercentage()}
        />
      </>
    );
  }
}
