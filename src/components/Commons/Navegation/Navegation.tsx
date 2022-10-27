import { Paper, Stack } from '@mui/material';
import { stateType } from 'app/storeTypes';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import viewsList from './data/viewsList';
import NavItem from './NavItem';

const Navegation = () => {
  const navigate = useNavigate();

  const activeNavegationId: string = useSelector(
    (state: stateType) => state.globalData.navegationActive
  );

  return (
    <Paper
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        height: '4rem',
        backgroundColor: 'white.main',
      }}
    >
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
      {/* new button */}
      {/* <div className='navegation__box__newButton'>
        <button
          onClick={() => navigate('/newExpense')}
          className='navegation__box__newButton__button'
        >
          <div className='navegation__box__newButton__circle'>
            <i className='fa-solid fa-plus fa-2x'></i>
          </div>
        </button>
      </div> */}
    </Paper>
  );
};

export default Navegation;
