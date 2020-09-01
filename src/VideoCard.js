import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import "./VideoCard.css";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  /*  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            videoRef.current.play();   
            setIsVideoPlaying(true);
        }
    }
*/

  return (
    <Fragment>
      <div className="videoCard">
        <VideoHeader />
        <ReactPlayer
          //ref={videoRef}
          //onCLick = {onVideoPress}
          className="videoCard_player"
          playing="true"
          muted="true"
          loop="true"
          url={url}
          height="100%"
          width="100%"
        />
        <VideoFooter
          channel={channel}
          likes={likes}
          shares={shares}
          avatarSrc={avatarSrc}
          song={song}
        />
      </div>
    </Fragment>
  );
}

export default VideoCard;
