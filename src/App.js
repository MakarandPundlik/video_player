import React from "react";
import ReactPlayer from "react-player";
import {
  BookmarkBorder,
  FastForwardOutlined,
  FastRewindOutlined,
  PlayArrowOutlined,
  PauseOutlined,
} from "@material-ui/icons";
import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";

function App() {
  const useStyles = makeStyles({
    playerWrapper: {
      width: "100%",
      position: "relative",
    },
    controlsWrapper: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      zIndex: 1,
    },
    constrolIcons: {
      color: "#777",
      fontSize: 50,
      transform: "scale(0.9)",
      "&hover": {
        color: "#fff",
        transform: "scale(1)",
      },
    },
  });

  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4">React Video Player</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <div className={classes.playerWrapper}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=UfmwwEtjYW8"
            width="100%"
            
            muted={false}
            playing={false}
          />

          <div className={classes.controlsWrapper}>
            {/* Top controls */}
            <Grid
              container
              justify="space-between"
              direction="row"
              alignItems="center"
              style={{ padding: 16 }}
            >
              <Grid item>
                <Typography varient="h5" style={{ color: "#ffffff" }}>
                  Video Title
                </Typography>
              </Grid>
              <Grid item>
                <Button startIcon={<BookmarkBorder />} color="secondary">
                  BookMark
                </Button>
              </Grid>
            </Grid>

            {/* middle controls */}
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <IconButton className={classes.constrolIcons} aria-label="reqind">
                <FastRewindOutlined fontSize="inherit" />
              </IconButton>

              <IconButton className={classes.constrolIcons} aria-label="reqind">
                <PlayArrowOutlined fontSize="inherit" />
              </IconButton>

              <IconButton className={classes.constrolIcons} aria-label="reqind">
                <FastForwardOutlined fontSize="inherit" />
              </IconButton>
            </Grid>

            {/* bottom controls */}
            <Grid
              container
              justify="space-between"
              direction="row"
              alignItems="center"
              style={{ padding: 16 }}
            ></Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
