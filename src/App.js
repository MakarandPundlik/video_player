import React from "react";
import ReactPlayer from "react-player";
import {
  BookmarkBorder,
  FastForwardOutlined,
  FastRewindOutlined,
  PlayArrowOutlined,
  PauseOutlined,
  VolumeUpOutlined,
  Fullscreen,
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
  Slider,
  withStyles,
  Tooltip,
} from "@material-ui/core";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: "primary",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

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
    bottomControls: {
      color: "#999",
      "&hover": {
        color: "#fff",
        transform: "scale(0.8)",
      },
    },
    volumeControls: {
      width: 100,
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
            url="https://www.youtube.com/watch?v=EeH7dIqyzLE"
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
                <Button startIcon={<BookmarkBorder />} color="primary">
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

              {/* <IconButton className={classes.constrolIcons} aria-label="reqind">
                <PlayArrowOutlined fontSize="inherit" />
              </IconButton> */}

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
            >
             
              <Grid item xs={12}>
                <PrettoSlider
                  min={0}
                  max={100}
                  defaultValue={30}
                  ValueLabelComponent={ValueLabelComponent}
                ></PrettoSlider>
              </Grid>
              <Grid item>
              <Grid container direction="row" alignItems="center">
                <IconButton className={classes.bottomControls}>
                  <PlayArrowOutlined fontSize="large" />
                </IconButton>
                <IconButton className={classes.bottomControls}>
                  <VolumeUpOutlined fontSize="large" />
                </IconButton>
                <Slider
                  className={classes.volumeControls}
                  min={0}
                  max={100}
                  defaultValue={100}
                  ValueLabelComponent={ValueLabelComponent}
                />
                <Grid item>
                  <Button varient="text" style={{ marginLeft: 16 }} className={classes.bottomControls}>
                    <Typography>10:20</Typography>
                  </Button>
                </Grid>
                
              </Grid>
              </Grid>
              <Grid item>
                  <Button varient="text" className={classes.bottomControls}>
                    <Typography>1x</Typography>
                  </Button>
                  <IconButton className={classes.bottomControls}><Fullscreen fontSize="large"/></IconButton>
                </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
