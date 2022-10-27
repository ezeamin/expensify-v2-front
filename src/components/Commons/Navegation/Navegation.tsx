import { useSelector } from 'react-redux';

import { stateType } from 'app/storeTypes';
import viewsList from './data/viewsList';

import { Container, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import NavItem from './NavItem';
import SpeedDialMenu from './SpeedDialMenu';

const Navegation = () => {
  const activeNavegationId: string = useSelector(
    (state: stateType) => state.globalData.navegationActive
  );

  return (
    <>
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
        <Container sx={{ height: '100%' }}>
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
      <SpeedDialMenu />
    </>
  );
};

export default Navegation;
