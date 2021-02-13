import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { isAfter, isBefore } from 'date-fns';
import Window from '../../components/Window';

import { Container, Title, Build } from './styles';

import { theme } from '../../styles/colors';

const Home: React.FC = () => {
  const windows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [sunrise, setSunrise] = useState(new Date());
  const [sunset, setSunset] = useState(new Date());
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      axios
        .get(
          `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=0`,
        )
        .then(response => {
          const rise = response.data.results.sunrise;
          const set = response.data.results.sunset;

          setSunrise(new Date(rise));
          setSunset(new Date(set));
        });
    });
  }, []);

  useEffect(() => {
    const date = new Date();

    if (isAfter(date, sunrise) && isBefore(date, sunset)) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }, [sunrise, sunset]);

  return (
    <ThemeProvider theme={theme}>
      <Container isDay={isDay}>
        <Title>Turn the lights ON/OFF</Title>

        <Build>
          {windows.map(window => (
            <Window key={window} />
          ))}
        </Build>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
