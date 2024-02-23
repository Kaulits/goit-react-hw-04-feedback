import React from "react";
import { StyledBtn, StyledWrapperBtn } from "./Feedback.styled";

export const FeedbackOptions = ({ handleBtnClick }) => (
  <div>
    <StyledWrapperBtn>
      <StyledBtn onClick={() => handleBtnClick('bad')}>Bad</StyledBtn>
      <StyledBtn onClick={() => handleBtnClick('neutral')}>Neutral</StyledBtn>
      <StyledBtn onClick={() => handleBtnClick('good')}>Good</StyledBtn>
    </StyledWrapperBtn>
  </div>
);
