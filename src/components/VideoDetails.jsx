import styled from "styled-components"

const VideoDetails = ({video}) => {
  console.log(video)
  return (
  <ShowVideo>
     {video.map((item,idx)=>(
       <div key={idx}>
         {/* {item.id.videoId && <VideoCard video={item} />} */}
         {/* {item.id.chanelId && <ChanelCard video={item} />} */}
        
       </div>
     ))}
      </ShowVideo>
  )
}

const ShowVideo = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
   gap: 2rem;

`;

export default VideoDetails
