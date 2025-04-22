import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/pages/layout/Layout";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNewsStore, useVacancyStore } from "../api";
import { useHomeStore } from "../api/homeStore/homeStore";
import { useBaytashStore } from "../api/baytashStore/baytashStore";
import { useContactStore } from "../api/contactStore/contactStore";
import { useComplexeStore } from "../api/complexStore/complexStore";

function App() {
  const { i18n } = useTranslation();
  const { fetchHomeData } = useHomeStore();
  const { fetchVacancies } = useVacancyStore();
  const { fetchNews } = useNewsStore();
  const { fetchBaytash } = useBaytashStore();
  const { fetchContacts } = useContactStore();
  const { fetchComplexes } = useComplexeStore();

  useEffect(() => {
    const onLangChange = () => {
      fetchHomeData();
      fetchVacancies();
      fetchNews();
      fetchBaytash();
      fetchContacts();
      fetchComplexes();
    };

    i18n.on("languageChanged", onLangChange);

    return () => {
      i18n.off("languageChanged", onLangChange);
    };
  }, []);

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
