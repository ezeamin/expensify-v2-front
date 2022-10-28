import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setNavegationActive } from 'features/globalData/globalDataSlice';

import { Stack, Typography, Button } from '@mui/material';

import { NavItemPropsType } from './types/navegationTypes';

const NavItem = (props: NavItemPropsType) => {
  const { id, icon, name, path, active } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setNavegationActive(id));
    navigate(path);
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        fontSize: '1.2rem',
        height: '100%',
        width: '100%',
        color: active ? 'primary.main' : 'gray.main',
      }}
    >
      <Stack>
        <Typography>
          <i className={icon}></i>
        </Typography>
        <Typography
          variant='body2'
          component='p'
          sx={{ fontSize: '0.85rem', fontWeight: 'bold' }}
        >
          {name}
        </Typography>
      </Stack>
    </Button>
  );
};

export default NavItem;
