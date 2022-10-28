import { useTranslation } from 'react-i18next';

import { Typography, Stack } from '@mui/material';

import { CircleButtonStyled } from 'styled';

import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const Header = (props: { name: string }) => {
  const { name } = props;
  
  const { t } = useTranslation();

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <div>
        <Typography
          variant='h4'
          component='h1'
          color='primary'
          className='animate-in-top'
          sx={{
            animationDelay: '100ms',
          }}
        >
          {t('HELLO') + ','}
        </Typography>
        <Typography
          variant='h4'
          component='h1'
          color='primary'
          fontWeight='bold'
          className='animate-in-top'
        >
          {name}
        </Typography>
      </div>
      <Stack direction='row' spacing={1}>
        <CircleButtonStyled className='animate-in-right'>
          <FilterAltRoundedIcon
            sx={{
              color: 'primary.main',
            }}
          />
        </CircleButtonStyled>
        <CircleButtonStyled className='animate-in-right'>
          <SettingsRoundedIcon
            sx={{
              color: 'primary.main',
            }}
          />
        </CircleButtonStyled>
      </Stack>
    </Stack>
  );
};

export default Header;
