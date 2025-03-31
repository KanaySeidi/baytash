const Office = () => {
  return (
    <>
      <div className="w-full mt-20 pb-20">
        <div className="w-11/12 mx-auto">
          <div className="flex gap-10 w-full items-center">
            <div className="w-2/3 flex flex-col text-white/30">
              <div>
                <p className="text-6xl text-white mb-5">
                  Расположение офиса продаж
                </p>
                <p>г. Бишкек, ул. Киевская 76</p>
              </div>
              <div className="flex justify-between mt-10">
                <div>
                  <p className="text-white">График работы</p>
                  <p>Отдел продаж</p>
                  <p>Пн-Пт 9:00-19:00</p>
                  <p>Сб 9:00-19:00</p>
                </div>
                <div>
                  <p className="text-white">Контакты</p>
                  <p>+996 312 588 883</p>
                  <p>+996 505 903 333</p>
                  <p>baytashgroup@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 w-full items-center">
              <iframe
                src="https://yandex.com/map-widget/v1/?ll=74.609899%2C42.874245&mode=whatshere&whatshere%5Bpoint%5D=74.609604%2C42.874210&whatshere%5Bzoom%5D=17&z=17.06"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Office;
