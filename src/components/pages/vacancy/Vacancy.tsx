import { useEffect } from "react";
import { useVacancyStore } from "../../../api/vacancyStore/vacancyStore";
import { useVacanPageStore } from "../../../api/vacancyStore/vacanPageStore";
import { Loader } from "../../organims/loader/Loader";
import { AnimatedArrows } from "../../molekulas/arrowDown/Arrow";

const Vacancy = () => {
  const { vacancies, loading, fetchVacancies } = useVacancyStore();
  const { vacanPage, fetchVacanPage } = useVacanPageStore();

  useEffect(() => {
    fetchVacancies();
    fetchVacanPage();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {vacanPage.map((item) => (
        <div key={item.id}>
          <div className="absolute inset-0 left-0 top-0 w-full h-screen -z-10">
            <img
              src={item.banner_image_url}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 h-screen flex flex-col justify-center items-center w-11/12 mx-auto text-white text-center">
            <h1 className="text-xl md:text-4xl lg:text-8xl">{item.title}</h1>
            <p className="md:w-full lg:w-1/2 mt-5 text-xs sm:text-sm md:text-lg lg:text-xl">
              {item.description}
            </p>
            <AnimatedArrows targetId="vacancies" />
          </div>
        </div>
      ))}
      <section className="w-full bg-[#141414] py-10" id="vacancies">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-start gap-10  text-white">
            {vacancies.map((item) => (
              <div
                className="md:w-72 lg:w-96 h-full py-5 px-4 bg-[#3E3E3E] rounded-4xl"
                key={item.id}
              >
                <p className="text-2xl font-semibold mb-2">{item.position}</p>
                <div className="w-full h-px bg-neutral-300 my-2"></div>
                <div className="mb-4">
                  <p className="font-semibold">Условия:</p>
                  <p className="whitespace-pre-line leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => window.open("https://wa.me/+996505903333")}
                  className="w-full h-10 bg-[#EAA000] rounded-4xl font-semibold"
                >
                  Связаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vacancy;
