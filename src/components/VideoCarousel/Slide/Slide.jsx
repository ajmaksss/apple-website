import { Text } from "./Text";
import { Video } from "./Video";

export const Slide = ({
  id,
  index,
  videoRef,
  video,
  textLists,
  onChangeVideo,
  onProcess,
  onLoadMetadata,
}) => (
  <div className="slide sm:pr-20 pr-10">
    <div className="video-carousel_container">
      <Video
        id={id}
        video={video}
        index={index}
        videoRef={videoRef}
        onChangeVideo={onChangeVideo}
        onProcess={onProcess}
        onLoadMetadata={onLoadMetadata}
      />
      <Text textLists={textLists} />
    </div>
  </div>
);
