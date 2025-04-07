import vector from "../../../assets/icon/fLogo.svg";
import tg from "../../../assets/icon/tg.png";
import wa from "../../../assets/icon/wa.png";
import ig from "../../../assets/icon/ig.png";
import tt from "../../../assets/icon/tt.png";

const Footer = () => {
  return (
    <>
      <div className="w-full  bg-[#141414]">
        <div className="w-full bg-[#252525] rounded-t-2xl pb-20">
          <div className="w-11/12 mx-auto pt-20 flex flex-col md:flex-row justify-between items-start gap-10 text-white">
            <div className="flex flex-col w-full md:w-1/2 gap-8 h-full">
              <img src={vector} alt="лого" className="w-40" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex gap-4">
                <img src={tg} alt="телеграм" />
                <img src={wa} alt="вотсап" />
                <img src={ig} alt="инстаграмм" />
                <img src={tt} alt="тикток" />
              </div>
            </div>
            <div className="w-1/3 md:ml-20 text-lg h-full flex flex-col gap-5">
              <p className="text-2xl text-white/30">Страницы</p>
              <ul className="flex flex-col gap-2">
                <li>Главаня</li>
                <li>Аккаунты</li>
                <li>Подписки</li>
                <li>О нас</li>
                <li>Войти</li>
                <li>Регистрация</li>
              </ul>
            </div>
            <div className="w-1/3 text-lg h-full flex flex-col gap-5">
              <p className="text-2xl text-white/30">Полезная инфорация</p>
              <ul className="flex flex-col gap-2">
                <li>FAQ</li>
                <li>Оплата</li>
                <li>Наши контакты</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
