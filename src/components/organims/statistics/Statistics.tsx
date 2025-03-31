import statis1 from "../../../assets/images/statis1.png";
import statis2 from "../../../assets/images/statis2.png";
import statis3 from "../../../assets/images/statis3.png";

const Statistics = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="w-11/12 mx-auto">
          <div className="flex text-white items-start gap-5">
            <img src={statis1} alt="здание" className="h-auto" />
            <img src={statis2} alt="здание" />
            <div className="flex flex-col gap-5">
              <p className="uppercase text-5xl">
                Символ <span className="text-[#947A41]">Совершенства</span> и{" "}
                <span className="text-[#947A41]">Надежности</span> в Возведении
                Современной Архитектуры
              </p>
              <p className="text-justify mt-5">
                Бай Таш Групп является международной, разно профильной
                компанией, инвестирующая в различные сферы строительства,
                девелопмента и инжиниринга.Бай Таш Групп является международной,
                разно профильной компанией, инвестирующая в различные сферы
                строительства, девелопмента и инжиниринга.
              </p>
              <p className="text-justify">
                Главной целью нашей компании является качество, чтобы каждый
                человек, живущий в нашем доме, мог быть уверен за безопасность и
                комфорт.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center text-white mt-20">
            <div className="flex flex-col gap-2 flex-wrap">
              <p className="text-7xl text-[#EAA000]">#1</p>
              <p className="text-sm text-[#EAA000]">
                Строительная компания в Кыргызстане
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <p className="text-7xl">15</p>
              <p className="text-sm">Готовых и строящихся объектов</p>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <p className="text-7xl">3500 +</p>
              <p className="text-sm">
                Счастливых семей живут в готовых квартирах
              </p>
            </div>
            <img src={statis3} alt="здание" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
