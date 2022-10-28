import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { StateType } from 'app/storeTypes'
;

const Overview = () => {
  const user = useSelector((state: StateType) => state.user.user);

  const { t } = useTranslation();

  return (
    <>
      <Typography>{`${t('HELLO')}, ${user.name}`}</Typography>
    </>
  );
};

export default Overview;
