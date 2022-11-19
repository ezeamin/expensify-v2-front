import { useSelector } from 'react-redux';

import { StateType } from 'app/storeTypes';

import { Header, BalanceCard, List } from 'components/Overview';

const Overview = () => {
  const user = useSelector((state: StateType) => state.user.user);

  return (
    <>
      <Header name={user.name} />
      <BalanceCard user={user} />
      <List />
    </>
  );
};

export default Overview;
