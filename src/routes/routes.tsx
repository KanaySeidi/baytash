import {
  Main,
  Tower,
  City,
  Residence,
  News,
  Vacancy,
  BayTash,
  Beton,
  Sand,
  Complexe,
} from "../components/pages";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/complexe/:id", element: <Complexe /> },
  { path: "/tower", element: <Tower /> },
  { path: "/city", element: <City /> },
  { path: "/residence", element: <Residence /> },
  { path: "/news", element: <News /> },
  { path: "/vacancy", element: <Vacancy /> },
  { path: "/baytashgroup", element: <BayTash /> },
  { path: "/beton-zavod", element: <Beton /> },
  { path: "/peschaniy-karier", element: <Sand /> },
];

export default routes;
