import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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

  border: 1px solid #AA2BFF;
  border-radius: 8px;
  margin: 20px 0;

  color: #fff;
`;

export const ButtonDiff = styled.button`
  width: 300px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 20px;

  background-color: #97F0A5;
  color: #241E2C;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.04px;

  cursor: pointer;

  margin: 20px 0;

  &:hover{
    background-color: #7ECC8B;
  }
`;