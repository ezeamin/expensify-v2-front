import { Container, Paper, Stack } from '@mui/material';

import viewsList from './data/viewsList';

import NavItem from './NavItem';

import { useSelector } from 'react-redux';

import { StateType } from 'app/storeTypes';

const Navbar = () => {
  const activeNavegationId: string = useSelector(
    (state: StateType) => state.globalData.navegationActive
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
      <Container sx={{ height: '100%' }} maxWidth='md'>
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
      </Container>
    </Paper>
  );
};

export default Navbar;
