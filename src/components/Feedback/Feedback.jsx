import React, { useState } from "react";
import { StyledWrapper } from "./Feedback.styled";
import { StatisticsOptions } from "./StatisticsOptions";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";


export const Feedback = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)


  const handleBtnClick = (options) => {
    // this.setState(prevState => ({
    //     [type]: prevState[type] + 1
      // }));
        switch (options) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
}

 const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
     // return good + neutral + bad;
       return good + neutral + bad;
}
    
  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    // const total = this.countTotalFeedback();
      // return total > 0 ? Math.round((good / total) * 100) : 0;
       const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
}


        return (
            <StyledWrapper>
                  <Section title="Please leave feedback">
                    <FeedbackOptions options={['good', 'neutral', 'bad']} handleBtnClick={handleBtnClick} />
                </Section>
               {countTotalFeedback() > 0 ? (
                    <Section title="Statistics">
                        <StatisticsOptions 
                            bad={bad}
                            neutral={neutral}
                            good={good}
                            countTotalFeedback={countTotalFeedback}
                            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
                        />
                    </Section>
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </StyledWrapper>
        )

    
}

// export class Feedback extends React.Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }



//   handleBtnClick = (type) => {
//     this.setState(prevState => ({
//         [type]: prevState[type] + 1
//     }));
// }

//  countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
// }
    
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
// }


//     render() {
//         const { good, neutral, bad } = this.state;
//           const totalFeedback = this.countTotalFeedback();
        // return (
        //     <StyledWrapper>
        //           <Section title="Please leave feedback">
        //             <FeedbackOptions options={['good', 'neutral', 'bad']} handleBtnClick={this.handleBtnClick} />
        //         </Section>
        //        {totalFeedback >0 ? (
        //             <Section title="Statistics">
        //                 <StatisticsOptions 
        //                     bad={bad}
        //                     neutral={neutral}
        //                     good={good}
        //                     countTotalFeedback={this.countTotalFeedback}
        //                     countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        //                 />
        //             </Section>
        //         ) : (
        //             <Notification message="There is no feedback" />
        //         )}
        //     </StyledWrapper>
        // )
//     }
// }