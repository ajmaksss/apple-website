import { Controls } from "../Controls";
import { Track } from "./Track";

export const Footer = ({
  videoRef,
  videoDivRef,
  videoSpanRef,
  isLastVideo,
  isPlaying,
  onProcess,
}) => (
  <div className="relative flex-center mt-10">
    <Track
      videoRef={videoRef}
      videoDivRef={videoDivRef}
      videoSpanRef={videoSpanRef}
    />
    <Controls
      isLastVideo={isLastVideo}
      isPlaying={isPlaying}
      onProcess={onProcess}
    />
  </div>
);
