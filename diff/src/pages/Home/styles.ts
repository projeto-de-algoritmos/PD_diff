import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;
