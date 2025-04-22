import sand from "../../../assets/images/sand.png";

const Sand = () => {
  return (
    <>
      <div className="absolute left-0 top-0 w-full h-[250px] md:h-[400px] lg:h-[886px] -z-10">
        <img src={sand} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 h-[250px] md:h-[400px] lg:h-[886px] flex flex-col justify-end lg:justify-center items-start w-11/12 mx-auto text-white">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-8xl">
          Песчанный карьер
        </h1>
        <p className="w-full lg:w-1/3 mt-5 pb-10 lg:pb-0 text-xs sm-text-sm md:text-md lg:text-base">
          Станция для дробления и просеивания песка (Карьер), а также,
          месторождения песчано-гравийной смеси, общая площадь — 70 га.
        </p>
      </div>
      <div className="w-full bg-black text-white">
        <div className="w-11/12 mx-auto py-20">
          <div className="w-full h-full flex flex-col justify-center items-center gap-10 pb-20">
            <h1 className="text-xl md:text-5xl">О Проекте</h1>
            <p className="w-full md:w-1/2 text-justify">
              В заводском арсенале имеются технологии, которые позволят
              изготавливать бетона всех марок и различных рецептур, в том числе
              и новых марок, обеспечивающих пластичность и подвижность,
              поскольку в республике значительно вырос спрос на многоэтажное
              строительство.
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-10 pb-10">
            <h1 className="text-xl md:text-5xl">Обратная связь</h1>
            <p>Станьте владельцем квартиры в ЖК "BAY TASH CITY" уже сегодня!</p>
          </div>
          <div className="flex justify-between gap-5 h-14 font-semibold text-xs md:text-base">
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
        </div>
      </div>
    </>
  );
};

export default Sand;
