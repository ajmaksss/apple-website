export const Video = ({
  id,
  video,
  index,
  videoRef,
  onChangeVideo,
  onProcess,
  onLoadMetadata,
}) => (
  <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
    <video
      className={`video ${id === 2 && "translate-x-44"} pointer-events-none`}
      playsInline={true}
      preload="auto"
      muted
      ref={(el) => (videoRef.current[index] = el)}
      onPlay={() =>
        onChangeVideo({
          isPlaying: true,
        })
      }
      onEnded={() => {
        index !== 3 ? onProcess("video-end", index) : onProcess("video-last");
      }}
      onLoadedMetadata={(el) => onLoadMetadata(index, el)}
    >
      <source src={video} type="video/mp4" />
    </video>
  </div>
);
