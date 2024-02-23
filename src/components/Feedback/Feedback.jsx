import React from "react";
import { StyledWrapper } from "./Feedback.styled";
import { StatisticsOptions } from "./StatisticsOptions";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";


export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }



  handleBtnClick = (type) => {
    this.setState(prevState => ({
        [type]: prevState[type] + 1
    }));
}

 countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
}
    
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
}


    render() {
        const { good, neutral, bad } = this.state;
          const totalFeedback = this.countTotalFeedback();
        return (
            <StyledWrapper>
                  <Section title="Please leave feedback">
                    <FeedbackOptions options={['good', 'neutral', 'bad']} handleBtnClick={this.handleBtnClick} />
                </Section>
               {totalFeedback >0 ? (
                    <Section title="Statistics">
                        <StatisticsOptions 
                            bad={bad}
                            neutral={neutral}
                            good={good}
                            countTotalFeedback={this.countTotalFeedback}
                            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                        />
                    </Section>
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </StyledWrapper>
        )
    }
}