import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/pages/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: null,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
