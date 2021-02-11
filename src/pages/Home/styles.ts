import styled from 'styled-components';

import sunImg from '../../images/sun.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url(${sunImg});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 240px;
`;

export const Title = styled.h1`
  align-self: flex-start;
  padding: 16px;
  margin: 16px 0 64px;
`;

export const Build = styled.div`
  background: #aaa;
  width: 420px;
  height: 100%;
  border-radius: 8px 8px 0 0;
  padding: 24px;

  display: grid;
  place-items: center;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
`;
