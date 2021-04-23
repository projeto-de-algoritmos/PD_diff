import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.textarea<ContainerProps>`
  display: flex;
  align-items: center;

  position: relative;

  background: #ffffff;
  color: #313131;

  width: 500px;
  min-height: 250px;

  padding: 1.6rem;

  border: 1px solid #313131;
  border-radius: 15px;

  transition: all 0.2s ease-in-out;

  margin-bottom: 0.8rem;
  outline: none;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  /* Se o input estiver focado, mude a cor do icone e da borda. A cor do icone esta conectado com color */
  ${(props) =>
    props.isFocused &&
    css`
      color:   border: 0.1rem solid #e4007d;
      border-color:   border: 0.1rem solid #e4007d;
    `}

  /* Se o input estiver preenchido, mude a cor do icone. A cor do icone esta conectado com color */
  ${(props) =>
    props.isFilled &&
    css`
      color:   border: 0.1rem solid #e4007d;
    `}

  &::placeholder {
    color: #1e1e1e;
  }

  /* textarea {
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    background: transparent;
    border: 0;
    font-size: 1.8rem;
    color: #1e1e1e;

    &::placeholder {
      color: #1e1e1e;
    }
  } */
`;