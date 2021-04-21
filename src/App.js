import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';

import React from 'react';
import ReactPlayer from 'react-player';


function App() {
  const useStyles = makeStyles({
    playerWrapper:{
      width:"100%",
      position:"relative"
    },
    controlsWrapper:{
      position:"absolute",
      top:0,
      bottom:0,
      left:0,
      right:0,
      background:"rgba(0,0,0,0.5)",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      zIndex:1
    }
  });
  
  const classes = useStyles();
  return (
    <>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h4">React Video Player</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar/>
    <Container maxWidth="md">
      <div className={classes.playerWrapper}>
      <ReactPlayer url="https://www.youtube.com/watch?v=UfmwwEtjYW8"
      width="100%"
      muted={false}
      playing={true}
      >
      </ReactPlayer>
      
      <div className={classes.controlsWrapper}>
      </div>
      </div>
    </Container>
    </>
  );
}

export default App;
