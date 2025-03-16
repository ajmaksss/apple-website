import { pauseImg, playImg, replayImg } from "../../utils";

export const Controls = ({ isLastVideo, isPlaying, onProcess }) => (
  <button className="control-btn">
    <img
      src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
      alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
      onClick={
        isLastVideo
          ? () => onProcess("video-reset")
          : !isPlaying
          ? () => onProcess("play")
          : () => onProcess("pause")
      }
    />
  </button>
);
