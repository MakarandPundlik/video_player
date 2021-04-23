import React, { useState,useRef } from "react";
import ReactPlayer from "react-player";
import Controls from "./components/controls";
import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative",
  },
});


function App() {
  const classes = useStyles();
  const [state,setState] = useState({
    playing:true
  });

  const playerRef = useRef(null);

  const {playing} = state;

  const handlePlayPause=()=>{
    setState({...state,playing:!state.playing})
  }
  
  const handleRewind=()=>{
    playerRef.current.seekTo(playerRef.current.getCurrentTime()-10);
  }

  const handleForwad=()=>{
    playerRef.current.seekTo(playerRef.current.getCurrentTime()+10);
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4">React Video Player</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <div className={classes.playerWrapper}>
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=EeH7dIqyzLE"
            width="100%"
            muted={false}
            playing={playing}
          />
          <Controls 
          onPlayPause={handlePlayPause}
          playing={playing}
          onRewind={handleRewind}
          onForward={handleForwad}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
