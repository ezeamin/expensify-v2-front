import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Paper, Container, Stack, Typography, IconButton } from '@mui/material';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { setTheme } from 'features/globalData/globalDataSlice';

import { optionsModes } from 'constants/settingsOptions/optionsModes';

import { OptionsItemProps } from '../types';
import { StateType } from 'app/storeTypes';
import themes from 'constants/themes';

import { ThemeSwitch } from '../styled';

const OptionsItem = (props: OptionsItemProps) => {
  const { name, path, mode, delay } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useSelector((state: StateType) => state.globalData.theme);
  const [switchChecked, setSwitchChecked] = useState(theme === themes.DARK);

  useEffect(() => {
    setSwitchChecked(theme === themes.DARK);
  }, [theme]);

  const handleSwitch = () => {
    if (name === 'THEME') {
      const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
      dispatch(setTheme(newTheme));
    }

    setSwitchChecked(!switchChecked);
  };

  const handleNavigation = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Paper
      sx={{
        py: 2,
        mt: 2,
        animationDelay: delay + 'ms',
        borderRadius: '1rem',
        color: '#fff',
        backgroundColor: 'gray.main',
      }}
      onClick={handleNavigation}
      className='animate-in-right'
    >
      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h6' component='p'>
            {t(name)}
          </Typography>
          {mode === optionsModes.CLICK ? (
            <IconButton>
              <ArrowForwardIosOutlinedIcon />
            </IconButton>
          ) : (
            <ThemeSwitch
              onChange={handleSwitch}
              checked={switchChecked}
              theme={theme}
            />
          )}
        </Stack>
      </Container>
    </Paper>
  );
};

export default OptionsItem;
