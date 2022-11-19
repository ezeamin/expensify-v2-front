import { Debt, Expense, Income, Payment, Transfer } from 'components/Movements';
import { movementsViews } from 'constants/movements';
import { MovementProps } from './types';

const Movement = (props: MovementProps) => {
  const { movement } = props;

  let component: JSX.Element;
  switch (movement) {
    case movementsViews.EXPENSE:
      component = <Expense />;
      break;
    case movementsViews.INCOME:
      component = <Income />;
      break;
    case movementsViews.TRANSFER:
      component = <Transfer />;
      break;
    case movementsViews.DEBT:
      component = <Debt />;
      break;
    case movementsViews.PAYMENT:
      component = <Payment />;
      break;
    default:
      component = <Expense />;
      break;
  }

  return <>{component}</>;
};

export default Movement;
