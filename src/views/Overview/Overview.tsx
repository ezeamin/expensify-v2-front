import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { StateType } from 'app/storeTypes';
import useLang from 'hooks/useLang';

const Overview = () => {
  const user = useSelector((state: StateType) => state.user.user);
  
  const lang = useLang();    

  return (
    <>
      <Typography>{`${lang.HELLO}, ${user.name}`}</Typography>
    </>
  );
};

export default Overview;
