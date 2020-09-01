import React, { Fragment } from "react";
import "./videoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Ticker from "react-ticker";

function VideoFooter({ likes, shares, channel, avatarSrc, song }) {
  return (
    <Fragment>
      <div className="videoFooter">
        <div className="videoFooter_text">
          <Avatar src={avatarSrc} />
          <h3>
            {channel} · <Button>Follow</Button>
          </h3>
        </div>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker className="ticker" mode="smooth">
            {({ index }) => <h1>{song}</h1>}
          </Ticker>
        </div>
        <div className="videoFooter_actions">
          <div className="videoFooter_actionsLeft">
            <FavoriteIcon fontSize="small" />
            <ModeCommentIcon fontSize="small" />
            <SendIcon fontSize="small" />
            <MoreHorizIcon fontSize="small" />
          </div>
          <div className="videoFooter_actionsRight">
            <div className="videoFooter_stat">
              <FavoriteIcon fontSize="small" />
              <p>{likes}</p>
            </div>
            <div className="videoFooter_stat">
              <ModeCommentIcon fontSize="small" />
              <p>{shares}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default VideoFooter;
