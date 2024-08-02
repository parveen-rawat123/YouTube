import styled from "styled-components"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"
const VideoDetails = ({ video }) => {
  console.log(video)
  return (
    <ShowVideo>
      {video.map((item, idx) => (
        <div key={idx}>
          {console.log(item)}
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.chanelId && <ChannelCard video={item} />} */}
        </div>
      ))}
    </ShowVideo>
  )
};

const ShowVideo = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
   gap: 2rem;

`;

export default VideoDetails
