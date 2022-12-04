import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@mui/material';

import useGetCurrentTheme from 'hooks/useGetCurrentTheme';

import { CircleButtonStyled } from 'styled';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Header = () => {
  const { t } = useTranslation();

  const theme = useGetCurrentTheme();

  const navigate = useNavigate();

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 2 }}
    >
      <Typography
        variant='h4'
        component='h1'
        color='mainText.main'
        className='animate-in-top'
        sx={{
          animationDelay: '100ms',
        }}
      >
        {t('SETTINGS')}
      </Typography>

      <CircleButtonStyled
        className='animate-in-right'
        onClick={() => navigate(-1)}
        theme={theme}
      >
        <ArrowBackOutlinedIcon
          sx={{
            color: 'mainText.main',
          }}
        />
      </CircleButtonStyled>
    </Stack>
  );
};

export default Header;
