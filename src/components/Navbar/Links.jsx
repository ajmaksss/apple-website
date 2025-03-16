import { navLists } from "../../constants";

export const Links = () => (
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
);
