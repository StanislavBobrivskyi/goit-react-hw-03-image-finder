import React from 'react';
import { Puff as LoaderSpinner } from 'react-loader-spinner';
import { Loaderstyle } from './Loader.styled';

export const Loader = () => (
  <Loaderstyle>
    <LoaderSpinner type="Puff" color="#d7167d" height={100} width={100} />
  </Loaderstyle>
);
