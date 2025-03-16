import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../../utils";

export const Video = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () =>
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  return (
    <div className="md:w-10/12 w-9/12">
      <video
        className="pointer-events-none"
        autoPlay
        muted
        playsInline={true}
        key={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};
