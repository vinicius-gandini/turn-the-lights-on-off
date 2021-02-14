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
          color: #333533;
          text-shadow: 1px 1px 1px #000;
        `
      : css`
          background-image: url(${moonImg}),
            linear-gradient(
              0deg,
              ${colors => colors.theme.backDarkSecundary} 18%,
              ${colors => colors.theme.backDarkPrimary} 100%
            );
          color: #fff;
        `}

  background-repeat: no-repeat, repeat;
  background-position: 100% 0%;
  background-size: 240px;
`;

export const Title = styled.h1`
  align-self: flex-start;
  padding: 16px;
  margin: 16px 0 48px;
`;

export const Build = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
`;

export const BuildContent = styled.div`
  background: #fbfbf2;
  width: 420px;
  height: 100%;
  border-radius: 8px 8px 0 0;
  padding: 24px;
  box-shadow: 1px 1px 8px 1px #1b1f22;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
