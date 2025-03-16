import { Button } from "./Button";
import { Title } from "./Title";
import { Video } from "./Video";

export const Hero = () => (
  <section className="w-full nav-height bg-black relative">
    <div className="h-5/6 w-full flex-center flex-col">
      <Title />
      <Video />
    </div>
    <Button />
  </section>
);
