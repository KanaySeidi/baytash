import cityImg from "../../../assets/images/city.png";
import lines from "../../../assets/images/LINES.svg";
import projectBuild from "../../../assets/images/project.jpg";
import buildLogo from "../../../assets/icon/zdanie.svg";
import GSlider from "../../organims/gslider/GSlider";

const City = () => {
  const projectDescr = [
    {
      id: 1,
      description:
        "'Без машин' - стильный двор, где вас не поглотит шум автомобилей, обеспечивая уединение и комфорт.",
      img: buildLogo,
    },
    {
      id: 2,
      description:
        "Противопожарная система - ваша безопасность для нас превыше всего.",
      img: buildLogo,
    },
    {
      id: 3,
      description:
        "Индивидуальный газовый котел и двухуровневый подземный паркинг - забота о вашем комфорте и удобстве.",
      img: buildLogo,
    },
    {
      id: 4,
      description:
        "Рядом с ботаническим садом на 460 паркомест - ваше окружение наполнено зеленью и свежим воздухом.",
      img: buildLogo,
    },
  ];
  const prjFeat = [
    {
      id: 1,
      description: "Светодиодное уличное освещение и прогулочные аллеи",
      img: buildLogo,
    },
    {
      id: 2,
      description: "Скоростные лифты",
      img: buildLogo,
    },
    {
      id: 3,
      description: "Детские площадки и бесшумные площадки для отдыха",
      img: buildLogo,
    },
  ];

  return (
    <div className="w-full h-full bg-white pt-20 relative">
      <div className="absolute w-full  top-0 left-0">
        <img
          src={cityImg}
          alt="ЖК BAY TASH CITY"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative  w-11/12 h-[800px] mx-auto">
        <div className="w-full flex flex-col items-start gap-8 pt-66">
          <h1 className="text-white text-8xl font-bold">ЖК BAY TASH CITY</h1>
          <ul className="flex gap-10 text-[#EAA000] font-medium list-disc font-lg mt-20">
            <li>630 квартир</li>
            <li>15 этажей</li>
            <li>8 подьездов</li>
            <li>2-х уровневый паркинг</li>
          </ul>
          <p className="w-1/2 text-white">
            Объявляем старт продаж квартир и коммерческих помещений на объекте
            возле ботанического сада на этапе котлована! Уникальное предложение
            для тех, кто мечтает о комфортном жилье в живописном районе рядом с
            природой. Успейте стать счастливым обладателем недвижимости в этом
            прекрасном месте!
          </p>
          <button className="w-auto px-4 py-2 text-white bg-[#EAA000] rounded-lg">
            Посмотреть планировку
          </button>
        </div>
      </div>
      <div className="absolute bg-[#141414] w-full h-[950px] rounded-b-4xl">
        <img src={lines} alt="" className="relative pt-40" />
      </div>
      <div className="relative w-11/12 h-[950px] mx-auto mt-10">
        <div className="flex items-center gap-10">
          <h1 className="text-white text-7xl">О ПРОЕКТЕ</h1>
          <p className="text-white text-md w-1/3">
            Уникальное предложение для тех, кто мечтает о комфортном жилье в
            живописном районе рядом с природой.
          </p>
        </div>
        <div className="w-full h-px bg-gray-200 rounded-4xl my-10"></div>
        <div className="flex gap-10">
          <img src={projectBuild} alt="" className="rounded-4xl shadow-2xl" />
          <div className="text-white flex flex-col justify-between">
            <p className="text-xl">
              Новый объект, расположенный рядом с ботаническим садом, обладает
              множеством преимуществ:
            </p>
            {projectDescr.map((item) => (
              <div key={item.id} className="flex gap-5 items-center">
                <img src={item.img} alt="" />
                <p className="text-white/70 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="flex flex-col text-white w-1/2 justify-between pb-20">
            <p>Наши преимущества:</p>
            {prjFeat.map((item) => (
              <div className="flex gap-5" key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.description}</p>
              </div>
            ))}
            <p>
              Мы создаем не просто объекты, а уникальные пространства, где
              каждая деталь продумана для вашего комфорта и удовлетворения.
              Добро пожаловать в наш мир красоты, комфорта и безопасности!
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex w-full gap-10">
              <div className="flex flex-col justify-center items-start pl-10 gap-2 w-full  h-40 bg-[#EAA000] rounded-4xl">
                <p className="text-6xl">1.62га</p>
                <p>Общая площадь территории</p>
              </div>
              <div className="flex flex-col justify-center items-start pl-10 gap-2 w-full h-40 border-2 border-[#EAA000] text-[#EAA000] rounded-4xl">
                <p className="text-6xl ">630</p>
                <p>квартир</p>
              </div>
            </div>
            <div className="w-full h-40 flex flex-col justify-center items-start pl-10 bg-[#EAA000] rounded-4xl">
              <p className="text-6xl">7700 кв.м</p>
              <p>
                территории коммерческих помещений - ваше уникальное пространство
                для жизни и бизнеса.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-20 h-[1000px]">
        <div className="flex gap-10 items-center">
          <h1 className="text-7xl">Галерея</h1>
          <p className="w-1/3 ">
            Уникальное предложение для тех,кто мечтает о комфортном жилье в
            живописном районе рядом с природой
          </p>
        </div>
        <GSlider />
      </div>
    </div>
  );
};

export default City;
