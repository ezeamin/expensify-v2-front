import { useTranslation } from 'react-i18next';

import { Typography, Stack } from '@mui/material';

import { CircleButtonStyled } from 'styled';

import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import useGetCurrentTheme from 'hooks/useGetCurrentTheme';

const Header = (props: { name: string }) => {
  const { name } = props;
  
  const { t } = useTranslation();

  const theme = useGetCurrentTheme();
  
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <div>
        <Typography
          variant='h4'
          component='h1'
          color='mainText.main'
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
          color='mainText.main'
          fontWeight='bold'
          className='animate-in-top'
        >
          {name}
        </Typography>
      </div>
      <Stack direction='row' spacing={1}>
        <CircleButtonStyled className='animate-in-right' theme={theme}>
          <FilterAltRoundedIcon
            sx={{
              color: 'mainText.main',
            }}
          />
        </CircleButtonStyled>
        <CircleButtonStyled className='animate-in-right' theme={theme}>
          <SettingsRoundedIcon
            sx={{
              color: 'mainText.main',
            }}
          />
        </CircleButtonStyled>
      </Stack>
    </Stack>
  );
};

export default Header;
