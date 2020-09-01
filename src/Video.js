import React, { Fragment, useState, useRef } from "react";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import "./VideoCard.css";

function Video({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <Fragment>
      <div className="videoCard">
        <VideoHeader />
        <video
          ref={videoRef}
          onClick={onVideoPress}
          alt="fancy"
          loop="loop"
          className="video2"
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

export default Video;
