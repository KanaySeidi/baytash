import {
  Main,
  News,
  Vacancy,
  BayTash,
  Beton,
  Sand,
  Complexe,
  Error,
  Stoodin,
} from "../components/pages";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/complexe/:id", element: <Complexe /> },
  { path: "/news", element: <News /> },
  { path: "/vacancy", element: <Vacancy /> },
  { path: "/baytashgroup", element: <BayTash /> },
  { path: "/beton-zavod", element: <Beton /> },
  { path: "/peschaniy-karier", element: <Sand /> },
  { path: "/error", element: <Error /> },
  { path: "/stoodin", element: <Stoodin /> },
];

export default routes;
