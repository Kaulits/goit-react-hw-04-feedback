import React from "react";
import { StyledWrapper } from "./Feedback.styled";

export const Notification = ({message}) => (
  <div>
   <StyledWrapper>{message}</StyledWrapper>
  </div>
);
