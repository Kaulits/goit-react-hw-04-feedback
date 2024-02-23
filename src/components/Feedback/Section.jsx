import React from 'react';
import { StyledWrapper } from './Feedback.styled';


export const Section = ({ title, children }) => (
    <div>
         <h2>{title}</h2>
        <StyledWrapper>{children}</StyledWrapper>
   
  </div>
);
