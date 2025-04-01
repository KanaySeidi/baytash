import cityImg from "../../../assets/images/city.png";
import lines from "../../../assets/images/LINES.svg";
import projectBuild from "../../../assets/images/project.jpg";
import buildLogo from "../../../assets/icon/zdanie.svg";
import GSlider from "../../organims/gslider/GSlider";
import plan1 from "../../../assets/images/plan1.png";
import plan2 from "../../../assets/images/plan2.png";
import plan3 from "../../../assets/images/plan3.png";
import locat from "../../../assets/images/locat.png";
import video from "../../../assets/video/video.mp4";
import gItem1 from "../../../assets/images/gItem1.jpg";
import gItem2 from "../../../assets/images/item1.jpg";
import gItem3 from "../../../assets/images/item3.jpg";
import gItem4 from "../../../assets/images/items2.jpg";
import { useState } from "react";

const City = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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

  const planFnA = [
    {
      id: 1,
      description: "ПЛАН ЭТАЖА 9 - 15 M:100",
      btn: "Подробнее",
      img: plan1,
    },
    {
      id: 2,
      description: "ПЛАН ЭТАЖА 9 - 15 M:100",
      btn: "Подробнее",
      img: plan2,
    },
    {
      id: 3,
      description: "ПЛАН ЭТАЖА 9 - 15 M:100",
      btn: "Подробнее",
      img: plan3,
    },
  ];

  const images = [gItem1, gItem2, gItem3, gItem4];

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
      <div className="w-11/12 mx-auto mt-20 h-[650px]">
        <div className="flex gap-10 items-center">
          <h1 className="text-7xl">Галерея</h1>
          <p className="w-1/3 ">
            Уникальное предложение для тех,кто мечтает о комфортном жилье в
            живописном районе рядом с природой
          </p>
        </div>
        <div className="w-full mt-20">
          <div className="w-full absolute left-0">
            <GSlider images={images} />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="uppercase text-center text-4xl">
          Планировка этажа и квартир
        </h1>
        <div className="w-full h-px rounded-4xl bg-gray-300 mt-4 mb-10"></div>
        <div className="flex justify-between">
          {planFnA.map((item) => (
            <div key={item.id} className="w-[433px] h-[539px] text-center">
              <div className="w-[433px] h-[420px]  bg-[#F0F0F0] rounded-4xl flex justify-center items-center">
                <img
                  src={item.img}
                  alt="планировка"
                  className="mix-blend-multiply"
                />
              </div>
              <p className="font-medium my-4 text-lg">{item.description}</p>
              <button
                className="w-full text-white bg-[#EAA000] rounded-4xl py-2 font-semibold"
                onClick={() => setSelectedImg(item.img)}
              >
                {item.btn}
              </button>
              {selectedImg && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                  <div className="relative bg-white p-5 rounded-4xl shadow-lg">
                    <button
                      className="absolute top-2 right-2 text-xl font-bold"
                      onClick={() => setSelectedImg(null)}
                    >
                      ✖
                    </button>
                    <img
                      src={selectedImg}
                      alt="Планировка"
                      className="w-full h-auto max-w-2xl rounded-4xl"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full h-[620px] rounded-4xl my-20">
          <img src={locat} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="w-full h-[1000px] bg-[#252525] rounded-t-4xl">
        <div className="w-11/12 mx-auto text-white py-20">
          <h1 className="text-4xl uppercase font-semibold mb-4">
            Видео презентация
          </h1>
          <div className="w-full h-px rounded-4xl bg-gray-300 mb-14"></div>
          <div className="w-full flex justify-between items-center gap-10">
            <div className="flex flex-col gap-10 w-1/2">
              <p className="text-2xl">Ботанический сад в шаговой доступности</p>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum accumsan, massa at bibendum eleifend, urna eros
                tincidunt nisi, sed posuere nulla justo sit amet elit. Curabitur
                tincidunt, velit a facilisis sollicitudin, mauris ligula
                tincidunt neque, id laoreet risus lacus sed velit. Donec aliquam
                libero et quam facilisis, sit amet ultricies nisi feugiat. Nulla
                facilisi.
              </p>
            </div>
            <video
              className="w-1/2 h-[320px] object-cover rounded-4xl"
              controls
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <p className="text-5xl text-white text-center uppercase">
            Обратная связь
          </p>
          <p className="text-lg text-white text-center mt-5 ">
            Станьте владельцем квартиры в ЖК "BAY TASH CITY" уже сегодня!
          </p>
          <div className="w-full h-px rounded-4xl mt-5 mb-20 bg-gray-300"></div>
          <div className="flex justify-between gap-5 h-14 my-10 font-semibold">
            <div className="border border-[#EAA000] text-[#EAA000] w-full flex justify-center items-center rounded-4xl">
              <p>0312 903 333</p>
            </div>
            <div className="w-full flex justify-center items-center bg-[#EAA000] text-black rounded-4xl">
              <p>0312 903 333</p>
            </div>
            <div className="border border-[#EAA000] text-[#EAA000] w-full flex justify-center items-center rounded-4xl">
              <p>0312 903 333</p>
            </div>
          </div>
          <div className="w-full rounded-4xl bg-[#EAA000] flex justify-center items-center h-14 text-lg font-semibold">
            <p>Посмотреть планировку</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
