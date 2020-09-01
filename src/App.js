import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    //  App Component will run ONCE when it loads, and never again
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app_top">
        {/* image on top - logo*/}
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/100px-Instagram_logo_2016.svg.png"
          alt=""
        />
        {/* Reels text*/}
        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        {reels.map(({ name, avatarSrc, song, url, likes, shares }) => (
          <Video
            channel={name}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

        <VideoCard
          channel="Renault"
          avatarSrc={
            "https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          song={"Got It On Me - Pop Smoke"}
          url={"https://www.dailymotion.com/video/x72e0rs"}
          likes={950}
          shares={30}
        />

        <VideoCard
          channel="MoneyMoves"
          avatarSrc={
            "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          song={"Sundown - Jack Harlow"}
          url={"https://www.dailymotion.com/video/x3q8jw9"}
          likes={969}
          shares={33}
        />

        {/* <Video />*/}
        {/* <Video />*/}
        {/* <Video />*/}
        {/* <Video />*/}
        {/* <Video />*/}
      </div>
    </div>
  );
}

export default App;
