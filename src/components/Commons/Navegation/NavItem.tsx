import { useDispatch } from 'react-redux';

import { setNavegationActive } from 'features/globalData/globalDataSlice';

import { Stack, Typography } from '@mui/material';

import { NavItemPropsType } from './types/navegationTypes';

import { WavyLink } from 'react-wavy-transitions';

const NavItem = (props: NavItemPropsType) => {
  const { id, icon, name, path, active } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setNavegationActive(id));
  };

  return (
    // WavyLink is a component that allows you to animate the transition between pages
    <WavyLink direction="down" color='#ef8767' to={path}>
      <Stack
        sx={{
          fontSize: '1.2rem',
          color: active ? 'primary.main' : 'gray.main',
        }}
        onClick={handleClick}
      >
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
    </WavyLink>
  );
};

export default NavItem;
