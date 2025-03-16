import { bagImg, searchImg } from "../../utils";

export const Actions = () => (
  <div className="flex items-baseline gap-5 max-sm:flex-1 max-sm:justify-end">
    <img src={searchImg} alt="search" width={18} height={18} />
    <img src={bagImg} alt="bag" width={18} height={18} />
  </div>
);
