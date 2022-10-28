import { Navegation } from 'components/index';

import { Container } from '@mui/material';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navegation />
      <Container sx={{
        mt: 3,
        mb: 5
      }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
