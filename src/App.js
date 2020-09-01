import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import Video from "./Video";

function App() {
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
        <VideoCard
          channel="aztecdaddy07"
          avatarSrc={
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          song={"WET - Luis JJ"}
          url={"https://www.dailymotion.com/video/x72e0rs"}
          likes={950}
          shares={30}
        />
        <VideoCard
          channel="luis"
          avatarSrc={
            "https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          song={"Test Song - Luis JJ"}
          url={"https://www.dailymotion.com/video/x3q8jw9"}
          likes={950}
          shares={30}
        />
        <Video
          channel="apex_2025"
          avatarSrc={
            "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          song={"Lets Go - Luis JJ"}
          url={
            "https://scontent-lax3-1.cdninstagram.com/v/t50.2886-16/118618312_1029386250812793_4041019848012882771_n.mp4?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Q_FahWpgJ6YAX8JOfxc&oe=5F506E27&oh=35f4db0b24b7d5ff4220b1a5883e40a9"
          }
          likes={969}
          shares={33}
        />
        <Video
          channel="MoneyMoves"
          avatarSrc={
            "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          song={"Sundown - Jack Harlow"}
          url={
            "https://scontent-lax3-1.cdninstagram.com/v/t50.2886-16/118502560_675472823315134_2354270812206827125_n.mp4?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ENOY_Klvt64AX-XUS9D&oe=5F504ADD&oh=3a1941e1ce50be18a425a73c744c8278"
          }
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
