import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  render() {
    return <Feedback />;
    // <Section title="">
    // <FeedbackOptions options={ } onLeaveFeedback={ }/>;
    // <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ }/>;
    // </Section>
  }
}
