import lang from "lang";

import routes from 'constants/routes';

import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import { speedDialListType } from '../types/navegationTypes';

export const speedDialList: speedDialListType[] = [
  {
    name: lang.t('EXPENSE'),
    path: routes.MAIN.EXPENSE.path,
    icon: <ArrowDownwardRoundedIcon />,
    color: 'red',
  },
  {
    name: lang.t('INCOME'),
    path: routes.MAIN.INCOME.path,
    icon: <ArrowUpwardRoundedIcon />,
    color: 'green',
  },
  {
    name: lang.t('TRANSFER'),
    path: routes.MAIN.TRANSFER.path,
    icon: <CompareArrowsRoundedIcon />,
    color: 'yellow',
  },
  {
    name: lang.t('DEBT'),
    path: routes.MAIN.DEBT.path,
    icon: <PersonRoundedIcon />,
    color: 'secondary',
  },
  {
    name: lang.t('PAYMENT'),
    path: routes.MAIN.PAYMENT.path,
    icon: <AccessTimeRoundedIcon />,
    color: 'primary',
  },
];
