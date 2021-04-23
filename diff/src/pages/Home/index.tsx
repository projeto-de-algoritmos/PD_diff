import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';

import { Container, StyledForm } from './styles';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);
  return (
    <>
      <Header formRef={formRef} />
      <Container>
        <StyledForm
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <TextArea name="Input 1" />
          <TextArea name="Input 2" />
        </StyledForm>
      </Container>
    </>
  );
};

export default Home;
