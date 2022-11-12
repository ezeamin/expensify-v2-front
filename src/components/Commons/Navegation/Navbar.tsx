import { Container, Paper, Stack } from '@mui/material';

import viewsList from './data/viewsList';

import NavItem from './NavItem';

import { useSelector } from 'react-redux';

import { StateType } from 'app/storeTypes';

const Navbar = () => {
  const activeNavegationId: string = useSelector(
    (state: StateType) => state.globalData.navegationActive
  );

  const children = (
    <Stack
      direction='row'
      justifyContent='space-evenly'
      alignItems='center'
      sx={{ height: '100%' }}
    >
      {viewsList.map((view) => (
        <NavItem
          key={view.name}
          {...view}
          active={activeNavegationId === view.id}
        />
      ))}
    </Stack>
  );

  return (
    <Paper
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        height: '4rem',
        backgroundColor: 'white.main',
        boxShadow: '0 0 10px 1px #00000018',
      }}
    >
      {/* Delete container for small devices, as it reduces space */}
      {window.innerWidth > 900 ? (
        <Container sx={{ height: '100%' }} maxWidth='md'>
          {children}
        </Container>
      ) : (
        <>{children}</>
      )}
    </Paper>
  );
};

export default Navbar;
