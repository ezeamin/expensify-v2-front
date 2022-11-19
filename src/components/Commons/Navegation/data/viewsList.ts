import routes from "constants/routes";
import lang from "lang";

import { viewType } from "../types/navegationTypes";

const viewsList: viewType[] = [
  {
    id: "OVERVIEW",
    name: lang.t('OVERVIEW'),
    icon: 'fa-solid fa-user-astronaut',
    path: routes.MAIN.HOME.path,
  },
  {
    id: "CATEGORIES",
    name: lang.t('CATEGORIES'),
    icon: 'fa-solid fa-utensils',
    path: routes.MAIN.CATEGORIES.path,
  },
  {
    id: "ACCOUNTS",
    name: lang.t('ACCOUNTS'),
    icon: 'fa-brands fa-cc-visa',
    path: routes.MAIN.ACCOUNTS.path,
  },
  {
    id: "STATS",
    name: lang.t('STATS'),
    icon: 'fa-solid fa-chart-line',
    path: routes.MAIN.STATS.path,
  },
];

export default viewsList;
