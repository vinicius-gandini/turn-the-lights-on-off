import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { isAfter, isBefore } from 'date-fns';
import Window from '../../components/Window';

import { Container, Title, Build } from './styles';

import { theme } from '../../styles/colors';

const Home: React.FC = () => {
  const windows = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], []);

  const [sunrise, setSunrise] = useState(new Date());
  const [sunset, setSunset] = useState(new Date());
  const [isDay, setIsDay] = useState(true);

  const [selectedWindows, setSelectedWindows] = useState<number[]>([]);

  const handleTurnTheLight = useCallback(
    (window: number) => {
      const alreadySelected = selectedWindows.findIndex(
        item => item === window,
      );

      if (alreadySelected >= 0) {
        const filteredItems = selectedWindows.filter(item => item !== window);

        setSelectedWindows(filteredItems);
      } else {
        setSelectedWindows([...selectedWindows, window]);
      }
    },
    [selectedWindows],
  );

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
            <Window
              key={window}
              onClick={() => handleTurnTheLight(window)}
              selected={!!selectedWindows.includes(window)}
            />
          ))}
        </Build>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
