import styled, { css } from 'styled-components';

import sunImg from '../../images/sun.svg';
import moonImg from '../../images/moon.svg';

interface ContainerProps {
  isDay: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  ${props =>
    props.isDay
      ? css`
          background-image: url(${sunImg}),
            linear-gradient(
              0deg,
              ${colors => colors.theme.backLightSecundary} 18%,
              ${colors => colors.theme.backLightPrimary} 100%
            );
        `
      : css`
          background-image: url(${moonImg}),
            linear-gradient(
              0deg,
              ${colors => colors.theme.backDarkSecundary} 18%,
              ${colors => colors.theme.backDarkPrimary} 100%
            );
        `}

  background-repeat: no-repeat, repeat;
  background-position: 100% 0%;
  background-size: 240px;
  background-color: rgb(248, 249, 249);
`;

export const Title = styled.h1`
  align-self: flex-start;
  padding: 16px;
  margin: 16px 0 48px;
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
