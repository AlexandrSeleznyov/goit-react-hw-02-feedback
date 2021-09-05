import { Component } from "react";
import "./App.css";
import FeedBackOptions from "./Components/FeedbackOptions/FeedBackOptions";
import Statistics from "./Components/Statistics/Statistics";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  total = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  positivePercentage = () => {
    const total = this.total();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrement}
          ></FeedBackOptions>
        </Section>
        <Section title="Statistics">
          {this.total() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}
