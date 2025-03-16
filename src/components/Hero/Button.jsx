import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Button = () => {
    
  useGSAP(() => {
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <div
      id="cta"
      className="flex flex-col items-center opacity-0 translate-y-20"
    >
      <a href="#higlights" className="btn">
        Buy
      </a>
      <p className="font-normal text-xl">From $199/month or $999</p>
    </div>
  );
};
