import React from "react";
import { StyledWrapperStat } from "./Feedback.styled";

export const StatisticsOptions = ({  bad, neutral, good, countTotalFeedback, countPositiveFeedbackPercentage }) => (
  <div>
  
   
    <StyledWrapperStat>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Good: {good}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </StyledWrapperStat>
  </div>
);
