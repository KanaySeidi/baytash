import enterOr from "../../../assets/icon/enterOr.svg";
import { useNewsStore } from "../../../api/newsStore/newsStore";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useNewsPageStore } from "../../../api/newsStore/newsPageStore";
import { Loader } from "../../organims/loader/Loader";
import { AnimatedArrows } from "../../molekulas/arrowDown/Arrow";

const News = () => {
  const { news, fetchNews } = useNewsStore();
  const { newsPage, loading, fetchNewsPage } = useNewsPageStore();
  const [activeArticle, setActiveArticle] = useState<null | (typeof news)[0]>(
    null
  );

  useEffect(() => {
    fetchNews();
    fetchNewsPage();
  }, []);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (loading) return <Loader />;

  return (
    <>
      {newsPage.map((item) => (
        <div key={item.id}>
          <div className="absolute left-0 top-0 w-full h-screen -z-10 bg-black">
            <img
              src={item.banner_image_url}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 h-screen flex flex-col justify-center items-center w-11/12 mx-auto text-white text-center">
            <h1 className="text-xl md:text-4xl lg:text-8xl">{item.title}</h1>
            <p className="w-full lg:w-1/2 mt-5 text-sm md:text-lg lg:text-xl">
              {item.description}
            </p>
            <AnimatedArrows targetId="news-section" />
          </div>
        </div>
      ))}

      <section className="w-full bg-[#141414] py-20" id="news-section">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-wrap justify-between overflow-x-auto px-6 gap-10">
            {news.map((article) => (
              <div
                key={article.id}
                className="relative w-96 rounded-2xl overflow-hidden"
              >
                <img
                  src={article.preview_image_url}
                  alt={article.title}
                  className="w-full h-72 object-contain rounded-2xl cursor-pointer"
                  onClick={() => setActiveArticle(article)}
                />
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 italic">
                    {formatDate(article.created_date)}
                  </p>
                </div>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="absolute bottom-3 right-3 cursor-pointer"
                >
                  <img src={enterOr} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!activeArticle}
        as="div"
        className="relative z-50"
        onClose={() => setActiveArticle(null)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/60">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl text-white">
              <div className="flex flex-col justify-between items-start">
                <img
                  src={activeArticle?.preview_image_url}
                  alt=""
                  className="w-full h-96 object-cover rounded-md"
                />
                <DialogTitle className="text-lg font-semibold">
                  {activeArticle?.title}
                </DialogTitle>
                <Button
                  onClick={() => setActiveArticle(null)}
                  className="bg-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-600 text-white absolute right-6 top-6"
                >
                  X
                </Button>
              </div>
              <div className="w-full h-px bg-neutral-400 my-3" />
              <p className="text-sm text-white/70">
                {activeArticle?.full_text}
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default News;
