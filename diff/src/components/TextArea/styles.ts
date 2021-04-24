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

  background-color: #241E2C;
  color: #fff;

  width: 500px;
  min-height: 250px;

  padding: 1.6rem;

  border: 1px solid #AA2BFF;
  border-radius: 8px;

  transition: all 0.2s ease-in-out;

  margin-bottom: 0.8rem;
  outline: none;

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }

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
`;