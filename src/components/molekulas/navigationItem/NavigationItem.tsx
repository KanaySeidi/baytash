import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function NavigationItem({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`flex w-full justify-center ${
        isOpen ? "flex-col items-center gap-4" : ""
      }`}
    >
      <div
        className={`flex gap-8 cursor-pointer ${
          isOpen ? "flex-col items-center gap-4" : ""
        }`}
      >
        <Link to="/">
          <div className="text-sm/6 font-semibold text-white/50 hover:text-white">
            Главная
          </div>
        </Link>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer">
            <div className="flex items-center gap-1">
              Объекты
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/1 rounded-xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-1 mt-5 z-50"
          >
            <div className="p-3">
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                to="/tower"
              >
                <p className="font-semibold text-white">BAY TASH TOWER</p>
                <p className="text-white/50">Уникальное сооружение</p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                to="/city"
              >
                <p className="font-semibold text-white">BAY TASH CITY</p>
                <p className="text-white/50">Целый город на ладони</p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                to="/residence"
              >
                <p className="font-semibold text-white">ELITE RESIDENCE</p>
                <p className="text-white/50">Почувствуй роскошную жизнь</p>
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
        <Link to="/news">
          <div className="text-sm/6 font-semibold text-white/50 hover:text-white cursor-pointer">
            Новости
          </div>
        </Link>
        <Link to="/vacancy">
          <div className="text-sm/6 font-semibold text-white/50 hover:text-white cursor-pointer">
            Вакансии
          </div>
        </Link>
      </div>
    </div>
  );
}
