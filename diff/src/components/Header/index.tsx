import React from 'react';

import { Container } from './styles';

interface IProps {
  formRef: any;
}

const Header: React.FC<IProps> = ({formRef}) => {
  return (
    <Container>
      <h1>Header</h1>
      <button onClick={()=>formRef.current?.submitForm()}>Diff</button>
    </Container>
  );
};

export default Header;
