import { Component } from 'react';

// let counterGood = 0;

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalCounter: 0,
    positiveFeedbackPercentage: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        totalCounter: prevState.good + prevState.neutral + prevState.bad,
      };
    });
    //   const totalCounter = this.state.counterGood + this.state.counterNeutral + this.state.counterBad;
    //   return totalCounter;
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedbackPercentage: Math.round(
          (prevState.good * 100) / prevState.totalCounter
        ),
      };
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.handleClickGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleClickNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleClickBad}>
              Bad
            </button>
          </li>
        </ul>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good:{this.state.good}</li>
          </ul>
          <ul>
            <li>Neutral:{this.state.neutral}</li>
          </ul>
          <ul>
            <li>Bad:{this.state.bad}</li>
          </ul>
          <ul>
            <li>Total:{this.state.totalCounter}</li>
          </ul>
          <ul>
            <li>Positive feedback:{this.state.positiveFeedbackPercentage}%</li>
          </ul>
        </div>
      </>
    );
  }
}
