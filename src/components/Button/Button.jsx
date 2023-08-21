import React from 'react';
import { Loadbutton } from './Button.styled';
export const Button = ({ onClick }) => (
  <Loadbutton type="button" onClick={onClick}>
    Load More
  </Loadbutton>
);
