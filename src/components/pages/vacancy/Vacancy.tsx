import btg from "../../../assets/images/btg.png";

const Vacancy = () => {
  const vacan = [
    {
      id: 1,
      title: "Прораб (умеющий делать геодезию)",
      subtitle: "опытом работы от 3-х летРабота в регионах",
      conditions1: "трудоустройство по ТК КР",
      conditions2: "соцпакет",
      conditions3: "стабильная зарплата",
      price: "оплата по договоренности",
      btn: "Связаться",
    },
    {
      id: 2,
      title: "Прораб (умеющий делать геодезию)",
      subtitle: "опытом работы от 3-х летРабота в регионах",
      conditions1: "трудоустройство по ТК КР",
      conditions2: "соцпакет",
      conditions3: "стабильная зарплата",
      price: "оплата по договоренности",
      btn: "Связаться",
    },
    {
      id: 3,
      title: "Прораб (умеющий делать геодезию)",
      subtitle: "опытом работы от 3-х летРабота в регионах",
      conditions1: "трудоустройство по ТК КР",
      conditions2: "соцпакет",
      conditions3: "стабильная зарплата",
      price: "оплата по договоренности",
      btn: "Связаться",
    },
    {
      id: 4,
      title: "Прораб (умеющий делать геодезию)",
      subtitle: "опытом работы от 3-х летРабота в регионах",
      conditions1: "трудоустройство по ТК КР",
      conditions2: "соцпакет",
      conditions3: "стабильная зарплата",
      price: "оплата по договоренности",
      btn: "Связаться",
    },
    {
      id: 5,
      title: "Прораб (умеющий делать геодезию)",
      subtitle: "опытом работы от 3-х летРабота в регионах",
      conditions1: "трудоустройство по ТК КР",
      conditions2: "соцпакет",
      conditions3: "стабильная зарплата",
      price: "оплата по договоренности",
      btn: "Связаться",
    },
    {
      id: 6,
      title: "Прораб (умеющий делать геодезию)",
      subtitle: "опытом работы от 3-х летРабота в регионах",
      conditions1: "трудоустройство по ТК КР",
      conditions2: "соцпакет",
      conditions3: "стабильная зарплата",
      price: "оплата по договоренности",
      btn: "Связаться",
    },
  ];

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
            {vacan.map((item) => (
              <div
                className="md:w-72 lg:w-96 h-[375px]  bg-[#3E3E3E] rounded-4xl"
                key={item.id}
              >
                <div className="w-11/12 h-full mx-auto flex flex-col justify-evenly">
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p>{item.subtitle}</p>
                  <div>
                    <p className="font-semibold">Условия:</p>
                    <p> - {item.conditions1}</p>
                    <p> - {item.conditions2}</p>
                    <p> - {item.conditions3}</p>
                  </div>
                  <p>{item.price}</p>
                  <button className="w-full h-10 bg-[#EAA000] rounded-4xl font-semibold">
                    {item.btn}
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
