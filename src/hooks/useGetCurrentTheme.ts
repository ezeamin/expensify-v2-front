import { StateType } from 'app/storeTypes';
import { useSelector } from 'react-redux';

const useGetCurrentTheme = () => {
  const theme = useSelector((state: StateType) => state.globalData.theme);

  return theme;
};

export default useGetCurrentTheme;
