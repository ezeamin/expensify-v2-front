import { useNavigate } from 'react-router';

import { IconButton, Stack, Typography } from '@mui/material';
import { ArrowBackIosNewRounded } from '@mui/icons-material';

import { HeaderProps } from './types/HeaderTypes';

const Header = (props: HeaderProps) => {
  const { title } = props;

  const navigate = useNavigate();

  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center'>
      <IconButton onClick={() => navigate(-1)} className='animate-in-right'>
        <ArrowBackIosNewRounded />
      </IconButton>
      <Typography
        variant='h5'
        component='h1'
        sx={{ ml: 2, animationDelay: '150ms' }}
        className='animate-in-right'
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default Header;
