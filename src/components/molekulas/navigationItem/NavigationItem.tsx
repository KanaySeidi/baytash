import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NavigationItem({
  isOpen,
  onLinkClick,
}: {
  isOpen: boolean;
  onLinkClick?: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex w-full justify-center ${
        isOpen ? "flex-col items-center gap-2 lg:gap-4" : ""
      }`}
    >
      <div
        className={`flex gap-4 lg:gap-8 cursor-pointer ${
          isOpen ? "flex-col items-center gap-2 lg:gap-4" : ""
        }`}
      >
        <Link to="/" onClick={onLinkClick}>
          <div className="text-sm/6 md:text-xs lg:text-base font-semibold text-white/50 hover:text-white">
            {t("header.main")}
          </div>
        </Link>
        <Link to="/baytashgroup" onClick={onLinkClick}>
          <div className="text-sm/6 md:text-xs lg:text-base font-semibold text-white/50 hover:text-white cursor-pointer">
            Бай Таш Групп
          </div>
        </Link>
        <Popover>
          {({ close }) => (
            <>
              <PopoverButton className="block text-sm/6 md:text-xs lg:text-base font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer">
                <div className="flex items-center gap-1 ">
                  <p className=" text-sm/6 md:text-xs lg:text-base">
                    {t("header.projects")}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                className="divide-y divide-white/1 rounded-xl bg-black text-sm/6 md:text-xs lg:text-base transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-1 mt-5 z-50"
              >
                <div className="p-3">
                  <Link
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    to="/complexe/1"
                    onClick={() => {
                      close();
                      onLinkClick?.();
                    }}
                  >
                    <p className="font-semibold md:text-xs lg:text-base text-white">
                      BAY TASH CITY
                    </p>
                    <p className="text-white/50 md:text-xs lg:text-base">
                      {t("header.project1")}
                    </p>
                  </Link>
                  <Link
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    to="/complexe/2"
                    onClick={() => {
                      close();
                      onLinkClick?.();
                    }}
                  >
                    <p className="font-semibold md:text-xs lg:text-base text-white">
                      BAY TASH TOWER
                    </p>
                    <p className="text-white/50 md:text-xs lg:text-base">
                      {t("header.project2")}
                    </p>
                  </Link>
                  <Link
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    to="/complexe/3"
                    onClick={() => {
                      close();
                      onLinkClick?.();
                    }}
                  >
                    <p className="font-semibold md:text-xs lg:text-base text-white">
                      ELITE RESIDENCE
                    </p>
                    <p className="text-white/50 md:text-xs lg:text-base">
                      {t("header.project3")}
                    </p>
                  </Link>
                  <Link
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    to="/stoodin"
                    onClick={() => {
                      close();
                      onLinkClick?.();
                    }}
                  >
                    <p className="font-semibold md:text-xs lg:text-base text-white">
                      BAY TASH 111 TOWER
                    </p>
                    <p className="text-white/50 md:text-xs lg:text-base">
                      {t("header.project6")}
                    </p>
                  </Link>
                  <Link
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    to="/beton-zavod"
                    onClick={() => {
                      close();
                      onLinkClick?.();
                    }}
                  >
                    <p className="font-semibold md:text-xs lg:text-base text-white">
                      {t("header.project4")}
                    </p>
                  </Link>
                  <Link
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    to="/peschaniy-karier"
                    onClick={() => {
                      close();
                      onLinkClick?.();
                    }}
                  >
                    <p className="font-semibold md:text-xs lg:text-base text-white">
                      {t("header.project5")}
                    </p>
                  </Link>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
        <Link to="/news" onClick={onLinkClick}>
          <div className="text-sm/6 md:text-xs lg:text-base font-semibold text-white/50 hover:text-white cursor-pointer">
            {t("header.news")}
          </div>
        </Link>
        <Link to="/vacancy" onClick={onLinkClick}>
          <div className="text-sm/6 md:text-xs lg:text-base font-semibold text-white/50 hover:text-white cursor-pointer">
            {t("header.vacancy")}
          </div>
        </Link>
      </div>
    </div>
  );
}
