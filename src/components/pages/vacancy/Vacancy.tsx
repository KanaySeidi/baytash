import { useEffect } from "react";
import { useVacancyStore } from "../../../api/vacancyStore/vacancyStore";
import btg from "../../../assets/images/btg.png";

const Vacancy = () => {
  const { vacancies, fetchVacancies } = useVacancyStore();

  useEffect(() => {
    fetchVacancies();
  }, []);

  console.log(vacancies);

  return (
    <>
      <div className="absolute left-0 top-0 w-full h-[300px]  sm:h-[400px]   md:h-[686px] -z-10">
        <img src={btg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 h-[300px] md:h-[686px] flex flex-col justify-center items-center w-11/12 mx-auto text-white text-center">
        <h1 className="text-xl md:text-4xl lg:text-8xl">Вакансии</h1>
        <p className="md:w-full lg:w-1/2 mt-5 text-xs sm:text-sm md:text-lg lg:text-xl">
          Присоединяйтесь к нашей команде! Мы ищем талантливых и амбициозных
          специалистов, готовых расти и развиваться вместе с нами. Проверьте
          актуальные вакансии и станьте частью успешного будущего.
        </p>
      </div>
      <section className="w-full bg-[#141414] py-10">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between gap-10  text-white">
            {vacancies.map((item) => (
              <div
                className="md:w-72 lg:w-96 h-[375px]  bg-[#3E3E3E] rounded-4xl"
                key={item.id}
              >
                <div className="w-11/12 h-full mx-auto flex flex-col justify-evenly">
                  <p>{item.position}</p>
                  <div>
                    <p className="font-semibold">Условия:</p>
                    <p className="pl-4">{item.description}</p>
                  </div>
                  <button className="w-full h-10 bg-[#EAA000] rounded-4xl font-semibold">
                    Связаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vacancy;
