import { Logo } from "./Logo";
import { Links } from "./Links";
import { Actions } from "./Actions";

export const Navabar = () => (
  <header className="flex justify-between items-center w-full py-5 sm:px-10 px-6">
    <nav className="flex w-full screen-max-width">
      <Logo />
      <Links />
      <Actions />
    </nav>
  </header>
);
