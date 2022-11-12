import { UserState } from 'features/user/userTypes';

import { Box, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CircleButtonStyled, CircleStyled } from 'styled';

import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';

const BalanceCard = (props: UserState) => {
  const { user } = props;

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        height: '200px',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        my: 3,
        borderRadius: '2rem',
        p: 2,
        overflow: 'hidden',
      }}
      className='animate-in-bottom'
    >
      <Box sx={{ animationDelay: '500ms' }} className='animate-in-bottom'>
        <Typography variant='h6' sx={{ fontSize: '1.1rem' }}>
          {t('AVAILABLE')}
        </Typography>
        <Stack direction='row' alignItems='flex-end'>
          <Typography variant='h5' sx={{ mb: '2px' }}>
            $
          </Typography>
          <Typography variant='h4' fontWeight='bold'>
            {user.extraInfo.available || '135000'}
          </Typography>
        </Stack>
      </Box>
      <CircleButtonStyled
        sx={{
          width: '3rem',
          height: '3rem',
          backgroundColor: 'primary.light',
          position: 'absolute',
          right: '1.5rem',
          top: '1.5rem',
          animationDelay: '500ms',
          border: 'none !important',

          '&:hover': {
            backgroundColor: 'primary.variant3',
          },
        }}
        className='animate-in-zoom'
      >
        <RemoveRedEyeRoundedIcon sx={{ color: 'primary.contrastText' }} />
      </CircleButtonStyled>
      <CircleStyled
        sx={{
          width: '6rem',
          height: '6rem',
          backgroundColor: 'primary.variant1',
          position: 'absolute',
          right: '-2rem',
          top: '-2rem',
          zIndex: -1,
          animationDelay: '300ms',
        }}
        className='animate-in-zoom'
      />
      <CircleStyled
        sx={{
          width: '15rem',
          height: '15rem',
          backgroundColor: 'primary.variant3',
          position: 'absolute',
          left: '-8rem',
          bottom: '-8rem',
          zIndex: -1,
          animationDelay: '300ms',
        }}
        className='animate-in-zoom'
      />
      <Box
        sx={{
          height: '100%',
        }}
      >
        {/* acá van los gastos de los meses anteriores y del actual */}
      </Box>
    </Box>
  );
};

export default BalanceCard;
