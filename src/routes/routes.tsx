import {
  Main,
  Tower,
  City,
  Residence,
  News,
  Vacancy,
  BayTash,
} from "../components/pages";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/tower", element: <Tower /> },
  { path: "/city", element: <City /> },
  { path: "/residence", element: <Residence /> },
  { path: "/news", element: <News /> },
  { path: "/vacancy", element: <Vacancy /> },
  { path: "/baytashgroup", element: <BayTash /> },
];

export default routes;
