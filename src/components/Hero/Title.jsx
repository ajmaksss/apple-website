import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Title = () => {
  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 2,
    });
  }, []);

  return <p className="hero-title">iPhone 15 Pro</p>;
};
