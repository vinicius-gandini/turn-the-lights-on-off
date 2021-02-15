import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { isAfter, isBefore } from 'date-fns';
import { Switch } from '@material-ui/core';
import Window from '../../components/Window';

import { Container, Title, Build, BuildContent } from './styles';

import { theme } from '../../styles/colors';

const Home: React.FC = () => {
  const windows = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], []);

  const [sunrise, setSunrise] = useState(new Date());
  const [sunset, setSunset] = useState(new Date());
  const [isDay, setIsDay] = useState(true);
  const [checked, setChecked] = useState(false);

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

  const handleSwitchChange = useCallback(() => {
    if (checked) {
      setSelectedWindows([]);
      setChecked(false);
    } else {
      setSelectedWindows(windows);
      setChecked(true);
    }
  }, [windows, checked]);

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
        <Title>Lights ON/OFF</Title>

        <BuildContent>
          <Build>
            {windows.map(window => (
              <Window
                key={window}
                onClick={() => handleTurnTheLight(window)}
                selected={!!selectedWindows.includes(window)}
              />
            ))}
          </Build>

          <Switch
            checked={checked}
            onChange={handleSwitchChange}
            color="primary"
          />
        </BuildContent>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
