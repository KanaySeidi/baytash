import btg from "../../../assets/images/btg.png";
import btg1 from "../../../assets/images/btg1.png";
import btg2 from "../../../assets/images/btg2.png";
import statis from "../../../assets/images/statis3.png";
import licence1 from "../../../assets/images/license1.png";
import licence2 from "../../../assets/images/license2.png";
import concrete1 from "../../../assets/images/conctreate1.png";
import concrete2 from "../../../assets/images/conctreate2.png";
import career1 from "../../../assets/images/career1.png";
import career2 from "../../../assets/images/career2.png";
import project2 from "../../../assets/images/projects2.png";
import project3 from "../../../assets/images/projects3.png";
import GSlider from "../../organims/gslider/GSlider";

const BayTash = () => {
  const images = [career1, career2, concrete1, concrete2];

  return (
    <>
      <div className="absolute left-0 top-0 w-full -z-10">
        <img src={btg} alt="" className="w-full" />
      </div>
      <div className="relative z-10 h-[886px] flex flex-col justify-center items-start w-11/12 mx-auto text-white">
        <h1 className="text-8xl">О КОМПАНИИ</h1>
        <p className="w-1/3 mt-5">
          Мы создаем современные и эффективные решения, ориентированные на
          улучшение пользовательского опыта и достижение бизнес-целей наших
          клиентов.
        </p>
      </div>
      <div className="w-full pt-20 bg-black text-white">
        <section className="w-11/12 mx-auto h-[600px]">
          <div className="flex h-9/10 gap-0">
            <div className="w-full h-full">
              <img src={btg1} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-6xl mb-10">
                Строим будущее с надежностью и качеством
              </h1>
              <p>
                Bay Tash Groupp — надежный застройщик с многолетним опытом в
                строительной отрасли. Мы специализируемся на возведении жилых,
                коммерческих и инфраструктурных объектов, сочетая современные
                технологии, качество и надежность.
              </p>
              <div className="flex mt-5">
                <div className="flex flex-col gap-10">
                  <p>
                    Наши проекты отличаются продуманной архитектурой,
                    долговечностью и комфортом. Мы строго соблюдаем сроки
                    строительства, используем сертифицированные материалы и
                    внедряем передовые инженерные решения.
                  </p>
                  <p>
                    Благодаря профессиональной команде и высокому стандарту
                    работы, мы заслужили доверие клиентов и партнеров. Наша цель
                    — создавать качественные пространства для жизни и бизнеса,
                    воплощая в реальность смелые архитектурные идеи.
                  </p>
                </div>
                <div className="w-full h-full flex justify-center items-end">
                  <img src={btg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-11/12 mx-auto flex justify-between">
          <div className="flex flex-col items-center gap-5">
            <p className="text-6xl">5+ лет</p>
            <p>спешной работы на рынке</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-6xl">100+</p>
            <p>реализованных проектов</p>
          </div>
          <div className="flex flex-col items-center gap-5 text-[#EAA000]">
            <p className="text-6xl">98%</p>
            <p>объектов сданы в срок</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-6xl">1500+</p>
            <p>построенных объектов</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-6xl">20+</p>
            <p>престижных наград</p>
          </div>
        </section>
        <section className="w-11/12 mx-auto bg-black pt-10">
          <div className="flex justify-between items-center">
            <p className="w-1/2 text-2xl">
              Строим <span className="font-semibold">надежные</span> и{" "}
              <span className="font-semibold">современные</span> пространства,
              где комфорт и качество сочетаются с инновациями
            </p>
            <img src={statis} alt="" />
          </div>
          <div>
            <h1 className="text-4xl">Лицензии</h1>
            <div className="w-full flex justify-between gap-5 mt-10">
              <div className="w-1/2 flex flex-col gap-5">
                <p>
                  ОсОО «Бай Таш Строй» обладает государственной лицензией на
                  осуществление всего комплекса работ, связанных со
                  строительством зданий и сооружений в соответствии с
                  государственным стандартом.{" "}
                </p>
                <p>
                  Наличие лицензии на выполнение строительно-монтажных работ
                  является гарантией качества осуществляемой деятельности.
                </p>
                <p>
                  За довольно короткий срок существования, компания развила свою
                  производственно-техническую базу, которая позволяет
                  осуществлять строительные работы I уровня сложности.{" "}
                </p>
                <p>
                  Для выполнения всех работ в компании применяются современные
                  строительные технологии с использованием качественных
                  строительных материалов от проверенных поставщиков.
                </p>
              </div>
              <div className="w-1/2 flex flex-col gap-5">
                <p>
                  Также, мы имеем государственную лицензию на градостроительные
                  и проектно-изыскательные работы. Что включает в себя следующие
                  виды деятельности: Разработка градостроительной документации
                  объектов II уровня ответственности: -генеральные планы городов
                  и сельских населенных мест;
                </p>
                <p>
                  Архитектурное проектирование объектов: -жилые дома,
                  общественные здания и сооружения, объекты производственного
                  назначения I уровня ответственности;
                </p>
                <p>
                  Строительное проектирование и конструирование: -жилые дома,
                  общественные здания и сооружения, объекты производственного
                  назначения I уровня ответственности;
                </p>
                <p>Проектирование инженерных систем, сетей и сооружений.</p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center gap-10 mt-10">
            <img src={licence1} alt="" />
            <img src={licence2} alt="" />
          </div>
        </section>
        <section className="w-11/12 mx-auto bg-black pt-10">
          <h1 className="text-4xl">Дополнительная информация</h1>
          <div className="flex justify-between mt-10">
            <img src={concrete1} alt="" />
            <img src={concrete2} alt="" />
          </div>
          <div className="flex flex-col items-end w-full mt-10">
            <div className="w-1/3 flex flex-col gap-5">
              <p className="text-4xl">Бетонный завод</p>
              <p>
                Бетонный завод «БАЙТАШ» не имеющий аналогов в Кыргызстане, на
                сегодняшний день завод является самым лучшим и в плане мощи
                оборудования и в плане качества. Завод сапособен изготовить до
                360 куб. м в час бетонов всех марок.{" "}
              </p>
              <p>
                Имеет большой автопарк и аккредитованную лабораторию,
                соответствующую всем требованиям, которые предъявляют к
                компаниям строительной индустриии.
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <img src={career1} alt="" />
            <img src={career2} alt="" />
          </div>
          <div className="flex flex-col w-1/2 gap-5 mt-10 pb-10">
            <p className="text-4xl">Песчаный карьер</p>
            <p className="text-justify">
              Станция для дробления и просеивания песка (Карьер), а также,
              месторождения песчано-гравийной смеси, общая площадь — 70 га. В
              заводском арсенале имеются технологии, которые позволят
              изготавливать бетона всех марок и различных рецептур, в том числе
              и новых марок, обеспечивающих пластичность и подвижность,
              поскольку в республике значительно вырос спрос на многоэтажное
              строительство.
            </p>
          </div>
        </section>
        <section className="w-11/12 mx-auto bg-black pt-10">
          <h1 className="text-4xl text-center mb-20">Подрядные работы</h1>
          <div className="flex justify-between gap-5">
            <div className="text-center flex flex-col gap-5">
              <p className="text-2xl">Жилой комплекс BAY TASH TOWER</p>
              <p className="">
                Жилой комплекс – бизнес центр «Bay Tash Tower» премиум класса,
                общей площадью около 32000 м2, состоящий из 19-этажей, будет
                расположен в центре столицы, по ул. Киевская -Тыныстанова.
              </p>
              <div className="">
                <img src={project2} alt="" className="h-[528px]" />
              </div>
            </div>
            <div className="text-center flex flex-col gap-5">
              <p className="text-2xl">Жилой комплекс ELITE RESIDENCE</p>
              <p>
                Жилой комплекс – бизнес центр «Elite Residence» — это роскошь,
                безупречный вкус, абсолютный комфорт, полная гармония,
                непревзойденное качество, благородство и изящество.
              </p>
              <div>
                <img
                  src={project3}
                  alt=""
                  className="h-[528px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-11/12 mx-auto pt-10">
          <div className="w-3/4 flex flex-col gap-5">
            <h1 className="text-4xl">Кафельный завод</h1>
            <p>
              В целях развития промышленного производства и развития
              строительства в Кыргызской Республике, расширения рабочих мест и
              увеличения налоговых поступлений ОсОО «Тянь-Шань Керамик» в
              сентябре 2016 года начало строительство нового кафельного завода с
              проектной мощностью 10 млн.м2 кафельной плитки в год.
            </p>
            <p>
              Инвестиции на строительство завода привлечены с Китайской Народной
              Республики на сумму 50 млн. долларов США. Завод будет состоять из
              двух линий по производству кафельной плитки. На первую линию
              планируется инвестиций на сумму 30 млн. долларов США, а на вторую
              линию остальные 20 млн. долларов США.
            </p>
          </div>
          <div className="h-[450px] mt-10">
            <div className="w-full absolute left-0">
              <GSlider images={images} />
            </div>
          </div>
        </section>
        <section className="w-11/12 mx-auto pt-10">
          <div className="w-3/4 flex flex-col gap-5">
            <h1 className="text-4xl">Наши специалисты</h1>
            <p>
              Штат компании сформирован из высококвалифицированных специалистов
              всех строительных специальностей, с международным опытом, который
              позволяет нашей компании не только качественно и быстро строить но
              и осуществлять техническое обследование и технический надзор за
              строительством.
            </p>
            <p>
              У нас работают профессионалы своего дела, которые совершенствуют
              свои навыки с каждым годом. Развитая система управленческого
              контроля позволяет всем подразделениям действовать слаженно и
              сдавать работы точно в срок без задержек.
            </p>
          </div>
          <div className="h-[450px] mt-10">
            <div className="w-full absolute left-0">
              <GSlider images={images} />
            </div>
          </div>
        </section>
        <section className="w-11/12 mx-auto pt-10">
          <div className="w-3/4 flex flex-col gap-5">
            <h1 className="text-4xl">Техническая база</h1>
            <p>
              Для обеспечения бесперебойного производства строительных и
              транспортных работ ОсОО «Бай Таш Строй» обладает всей необходимой
              специализированной техникой и грузовым автопарком.
            </p>
          </div>
          <div className="h-[450px] mt-10">
            <div className="w-full absolute left-0">
              <GSlider images={images} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BayTash;
