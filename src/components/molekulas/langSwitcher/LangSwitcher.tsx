import { Select } from "@headlessui/react";

const LanguageSwitcher = () => {
  return (
    <div className="text-white text-base md:text-md lg:text-lg focus:outline-none outline-none">
      <Select
        name="status"
        className="focus:outline-none"
        aria-label="Project status"
      >
        <option value="RUS" className="text-black/50 focus:outline-none">
          RU
        </option>
        <option value="KGZ" className="text-black/50 focus:outline-none">
          KG
        </option>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
