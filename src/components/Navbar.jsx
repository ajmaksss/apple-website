import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export const Navabar = () => (
  <header className="flex justify-between items-center w-full py-5 sm:px-10 px-5">
    <nav className="flex w-full screen-max-width">
      {" "}
      <img src={appleImg} alt="Apple" width={14} height={18} />
      <div className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((link, i) => (
          <div
            key={i}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            {link}
          </div>
        ))}
      </div>
      <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
        <img src={searchImg} alt="search" width={18} height={18} />
        <img src={bagImg} alt="bag" width={18} height={18} />
      </div>
    </nav>
  </header>
);
