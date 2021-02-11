import React, { useEffect, useState } from 'react';
import Window from '../../components/Window';

import { Container, Title, Build } from './styles';

const Home: React.FC = () => {
  const windows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.latitude;

        setLatitude(lat);
        setLongitude(lng);
      });
    }
  }, []);

  return (
    <Container>
      <Title>Turn the lights ON/OFF</Title>

      <Build>
        {windows.map(window => (
          <Window key={window} />
        ))}
      </Build>
    </Container>
  );
};

export default Home;
