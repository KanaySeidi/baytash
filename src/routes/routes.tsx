import {
  Main,
  Tower,
  City,
  Residence,
  News,
  Vacancy,
} from "../components/pages";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/tower", element: <Tower /> },
  { path: "/city", element: <City /> },
  { path: "/residence", element: <Residence /> },
  { path: "/news", element: <News /> },
  { path: "/vacancy", element: <Vacancy /> },
];

export default routes;
