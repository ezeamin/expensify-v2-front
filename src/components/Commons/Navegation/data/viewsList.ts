import routes from "constants/routes";
import es from "lang/es";

import { viewType } from "../types/navegationTypes";

const viewsList: viewType[] = [
  {
    id: "OVERVIEW",
    name: es.OVERVIEW,
    icon: 'fa-solid fa-user-astronaut',
    path: routes.MAIN.HOME.path,
  },
  {
    id: "CATEGORIES",
    name: es.CATEGORIES,
    icon: 'fa-solid fa-utensils',
    path: routes.MAIN.DATA_MENU.path,
  },
  {
    id: "ACCOUNTS",
    name: es.ACCOUNTS,
    icon: 'fa-brands fa-cc-visa',
    path: routes.MAIN.DATA_TABLES.path,
  },
  {
    id: "STATS",
    name: es.STATS,
    icon: 'fa-solid fa-chart-line',
    path: routes.MAIN.STATS.path,
  },
];

export default viewsList;
