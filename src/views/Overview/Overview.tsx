import { useSelector } from 'react-redux';

import { StateType } from 'app/storeTypes';

import { Header, BalanceCard, List } from 'components/Overview';

import AnimatedUnmount from 'views/Layout/AnimatedUnmount';

const Overview = () => {
  const user = useSelector((state: StateType) => state.user.user);

  return (
    <AnimatedUnmount>
      <Header name={user.name} />
      <BalanceCard user={user} />
      <List />
    </AnimatedUnmount>
  );
};

export default Overview;
