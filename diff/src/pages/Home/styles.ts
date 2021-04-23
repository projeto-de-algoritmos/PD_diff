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

export const Result = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid #313131;
  border-radius: 15px;
  margin: 20px 0;
`;