import { useRef } from "react";
import { hightlightsSlides } from "../../constants";
import { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Controls } from "./Controls";
import { Slide } from "./Slide/Slide";
import { Footer } from "./Footer/Footer";

export const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  const handleChangeVideo = (val) => setVideo((prev) => ({ ...prev, ...val }));

  useGSAP(() => {
    // changing slides
    gsap.to(".slide", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power1.inOut",
    });
    // start playing video on view
    gsap.to(".video", {
      scrollTrigger: {
        trigger: ".video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (index, el) =>
    setLoadedData((prev) => [...prev, el]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current; //track progress span
    if (span[videoId]) {
      // animate the progress of the video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get video progress
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          // reset track span after video ended
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;
      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map(({ id, video, textLists }, i) => (
          <Slide
            key={i}
            index={i}
            id={id}
            video={video}
            textLists={textLists}
            videoRef={videoRef}
            onChangeVideo={handleChangeVideo}
            onProcess={handleProcess}
            onLoadMetadata={handleLoadedMetadata}
          />
        ))}
      </div>
      <Footer
        videoRef={videoRef}
        videoDivRef={videoDivRef}
        videoSpanRef={videoSpanRef}
        isLastVideo={isLastVideo}
        isPlaying={isPlaying}
        onProcess={handleProcess}
      />
    </>
  );
};
