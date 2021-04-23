import React, { useRef, useCallback, useState } from 'react';

import lcs from '../../utils/lcs';
import DIFF from '../../utils/diff';
import IResult from '../../models/IResult';

import { FormHandles } from '@unform/core';

import { Container, StyledForm, Result } from './styles';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [resultString, setResultString] = useState<any>('');

  const handleSubmit = useCallback((data) => {
    const arrayLeft = data.left.split(" ");
    const arrayRight = data.right.split(" ");
    const dp: number[][] = []
    const diffArray: IResult[] = [];

    for (let i = 0; i < arrayLeft.length + 1; i++) {
      let aux: number[] = []
      for (let j = 0; j < arrayRight.length + 1; j++) {
        aux.push(-1);
      }
      dp.push(aux);
    }
    lcs(arrayLeft, arrayRight, arrayLeft.length, arrayRight.length, dp);
    const result = DIFF(arrayLeft, arrayRight, arrayLeft.length, arrayRight.length, dp, diffArray);

    let auxResult: any = '';


    auxResult = result.map((palavra, index) => {
      if(palavra.change === 'sub'){
        return <p key={index} style={{color: 'red'}}>&nbsp;{`${palavra.content}`}</p>;
      }
      else if(palavra.change === 'add'){
        return <p key={index} style={{color: 'green'}}>&nbsp;{`${palavra.content}`}</p>;
      }
      else {
        return <p key={index}>&nbsp;{`${palavra.content}`}</p>;
      }      
    })
    setResultString(auxResult);

    document?.getElementById("result")?.scrollIntoView({ behavior: 'smooth' });

  }, []);
  return (
    <>
      <Header formRef={formRef} />
      <Container>
        <StyledForm
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <TextArea name="left" placeholder="Digite algo aqui" />
          <TextArea name="right" placeholder="Digite algo aqui" />
        </StyledForm>
        <Result id="result">
          {resultString || 'Digite algo nos campos acima'}
        </Result>
      </Container>
    </>
  );
};

export default Home;
