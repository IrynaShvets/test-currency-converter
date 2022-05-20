import React from 'react';
import { Watch } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Watch
        color="#642106"
        height={90}
        width={90}
        ariaLabel="loading-indicator"
      />
    </Container>
  );
};

export default Loader;
