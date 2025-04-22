import btg from "../../../assets/images/btg.png";
import enterOr from "../../../assets/icon/enterOr.svg";
import { useNewsStore } from "../../../api/newsStore/newsStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const News = () => {
  const { news, fetchNews } = useNewsStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchNews();
  }, []);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="absolute left-0 top-0 w-full -z-10">
        <img src={btg} alt="" className="w-full" />
      </div>
      <div className="relative z-10 h-[686px] flex flex-col justify-center items-center w-11/12 mx-auto text-white text-center">
        <h1 className="text-8xl">НОВОСТИ</h1>
        <p className="w-1/2 mt-5">
          Мы создаем современные и эффективные решения, ориентированные на
          улучшение пользовательского опыта и достижение бизнес-целей наших
          клиентов.
        </p>
      </div>
      <section className="w-full bg-[#141414] h-[1000px]">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-wrap justify-between overflow-x-auto px-6 py-10 gap-10">
            {news.map((article) => (
              <div
                key={article.id}
                className="relative w-96 rounded-2xl overflow-hidden"
              >
                <img
                  src={article.preview_image_url}
                  alt={article.title}
                  className="w-full h-72 object-contain rounded-2xl"
                />
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 italic">
                    {article.views_count} {t("news.views")} •{" "}
                    {formatDate(article.created_date)}
                  </p>
                </div>

                <button className="absolute bottom-3 right-3">
                  <img src={enterOr} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
