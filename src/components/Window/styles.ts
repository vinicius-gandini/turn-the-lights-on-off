import styled, { css } from 'styled-components';

interface WindowProps {
  isClicked: boolean;
}

export const Container = styled.div<WindowProps>`
  width: 60px;
  height: 60px;
  background: #e5e6e4;
  border-radius: 8px;
  box-shadow: inset 0px 0px 4px #b8bab5;
  transition: background-color 0.5s;

  ${props =>
    props.isClicked &&
    css`
      background: #ffdd00;
      box-shadow: 1px 1px 8px 1px #ffc300;
    `}
  button {
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
  }
`;

export const Title = styled.span``;
