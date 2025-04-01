import btg from "../../../assets/images/btg.png";
import news1 from "../../../assets/images/news1.png";
import news2 from "../../../assets/images/news2.png";
import news3 from "../../../assets/images/news3.png";
import news4 from "../../../assets/images/news4.png";
import news5 from "../../../assets/images/news5.png";
import news6 from "../../../assets/images/news6.png";
import enterOr from "../../../assets/icon/enterOr.svg";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Tips for Living Green: Small Changes with Big Impact",
      image: news1,
      views: "2k",
      time: "2 months ago",
    },
    {
      id: 2,
      title: "Tips for Living Green: Small Changes with Big Impact",
      image: news2,
      views: "2k",
      time: "2 months ago",
    },
    {
      id: 3,
      title: "Tips for Living Green: Small Changes with Big Impact",
      image: news3,
      views: "2k",
      time: "2 months ago",
    },
    {
      id: 4,
      title: "Tips for Living Green: Small Changes with Big Impact",
      image: news4,
      views: "2k",
      time: "2 months ago",
    },
    {
      id: 5,
      title: "Tips for Living Green: Small Changes with Big Impact",
      image: news5,
      views: "2k",
      time: "2 months ago",
    },
    {
      id: 6,
      title: "Tips for Living Green: Small Changes with Big Impact",
      image: news6,
      views: "2k",
      time: "2 months ago",
    },
  ];

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
            {articles.map((article) => (
              <div
                key={article.id}
                className="relative w-96 rounded-2xl overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-72 object-contain rounded-2xl"
                />
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {article.views} views • {article.time}
                  </p>
                </div>

                {/* Кнопка перехода */}
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
