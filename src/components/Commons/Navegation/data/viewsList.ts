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
    id: "DATA_MENU",
    name: es.DATA,
    icon: 'fa-solid fa-list',
    path: routes.MAIN.DATA_MENU.path,
  },
  {
    id: "DATA_TABLES",
    name: es.TABLES,
    icon: 'fa-solid fa-table-list',
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
