import es from 'lang/es';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import routes from 'constants/routes';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import { speedDialListType } from '../types/navegationTypes';

export const speedDialList: speedDialListType[] = [
  {
    name: es.EXPENSE,
    path: routes.MAIN.EXPENSE.path,
    icon: <ArrowDownwardRoundedIcon />,
    color: 'red',
  },
  {
    name: es.INCOME,
    path: routes.MAIN.INCOME.path,
    icon: <ArrowUpwardRoundedIcon />,
    color: 'green',
  },
  {
    name: es.TRANSFER,
    path: routes.MAIN.TRANSFER.path,
    icon: <CompareArrowsRoundedIcon />,
    color: 'yellow',
  },
  {
    name: es.DEBT,
    path: routes.MAIN.DEBT.path,
    icon: <PersonRoundedIcon />,
    color: 'secondary',
  },
  {
    name: es.PAYMENT,
    path: routes.MAIN.PAYMENT.path,
    icon: <AccessTimeRoundedIcon />,
    color: 'primary',
  },
];
