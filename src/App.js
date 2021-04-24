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
import screenfull from "screenfull";
const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    height:"100%",
    position: "relative",
  },
});


function App() {
  const classes = useStyles();
  const [state,setState] = useState({
    playing:true,
    muted:true,
    volume:0.5,
    plybackrate:1.0,
    played:0,
    seeking:false
  });

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const {playing,muted,volume,playbackrate,played,seeking} = state;

  const handlePlayPause=()=>{
    setState({...state,playing:!state.playing})
  }
  
  const handleRewind=()=>{
    playerRef.current.seekTo(playerRef.current.getCurrentTime()-10);
  }

  const handleForwad=()=>{
    playerRef.current.seekTo(playerRef.current.getCurrentTime()+10);
  }

  const handleMute=()=>{
    setState({...state,muted:!state.muted});
  }

  const handleVolumeChange=(e,newValue)=>{
    setState({...state,volume:parseFloat(newValue/100),muted:volume===0?true:false})
  }

  const handleVolumeSeekUp=(e,newValue)=>{
    setState({...state,volume:parseFloat(newValue/100),muted:volume===0?true:false})
  }

  const handlePlaybackrateChange=(rate)=>{
    setState({...state,playbackrate:rate});
  }

  const toggleFullScreen=()=>{
    screenfull.toggle(playerContainerRef.current);
  }

  const handleProgress=(changeState)=>{
    console.log(changeState);
    setState({...state,...changeState});
  }

  const handleSeekChange=(e,newValue)=>{
    setState({...state,played:parseFloat(newValue/100)})
  }

  const handleSeekMouseDown=(e)=>{
    if(!seeking)
    setState({...state,seeking:true})
  }

  const handleSeekMouseUp=(e,newValue)=>{
    setState({...state,seeking:false})
    playerRef.current.seekTo(newValue/100)
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
        <div className={classes.playerWrapper} >
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=EeH7dIqyzLE"
            width="100%"
            muted={muted}
            playing={playing}
            volume={volume}
            playbackRate={playbackrate}
            onProgress={handleProgress}
          />
          <Controls 
          onPlayPause={handlePlayPause}
          playing={playing}
          onRewind={handleRewind}
          onForward={handleForwad}
          muted={muted}
          onMute={handleMute}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekUp={handleVolumeSeekUp}
          volume={volume}
          playbackrate={playbackrate}
          onPlaybackrateChange={handlePlaybackrateChange}
          onToggleFullScreen = {toggleFullScreen}
          played={played}
          onSeek={handleSeekChange}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
