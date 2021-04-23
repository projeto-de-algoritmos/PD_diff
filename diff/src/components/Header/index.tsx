import React from 'react';

import { Container, ButtonDiff } from './styles';

interface IProps {
  formRef: any;
}

const Header: React.FC<IProps> = ({formRef}) => {
  return (
    <Container>
      <h1>Header</h1>
      <ButtonDiff onClick={()=>formRef.current?.submitForm()}>Diff</ButtonDiff>
    </Container>
  );
};

export default Header;
