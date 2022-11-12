import { useEffect, useState } from 'react';

import { Navegation } from 'components/Commons/index';

import { Container } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { WavyContainer } from 'react-wavy-transitions';

const Layout = () => {
  const [of, setOf] = useState('hidden');

  useEffect(() => {
    window.setTimeout(() => {
      setOf('visible');
    }, 1000);
  }, []);

  return (
    <>
      {/* For animations in transition */}
      <WavyContainer />
      <Navegation />
      <Container
        sx={{
          mt: 3,
          mb: 15,
          overflowY: of,
          overflowX: 'hidden',
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
