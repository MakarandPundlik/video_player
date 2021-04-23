import React from "react";

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
  makeStyles,
  Typography,
  Grid,
  Button,
  IconButton,
  Slider,
  withStyles,
  Tooltip,
  Popover,
} from "@material-ui/core";

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

const useStyles = makeStyles({
  controlsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.2)",
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
function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
function Controls({ onPlayPause, playing,onRewind,onForward }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "playbackrate-popover" : undefined;

  return (
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
      <Grid container direction="row" justify="center" alignItems="center">
        <IconButton onClick={onRewind} className={classes.constrolIcons} aria-label="reqind">
          <FastRewindOutlined fontSize="inherit" />
        </IconButton>

        {playing ? (
          <IconButton
            onClick={onPlayPause}
            className={classes.constrolIcons}
            aria-label="reqind"
          >
            <PauseOutlined fontSize="inherit" />
          </IconButton>
        ) : (
          <IconButton
            onClick={onPlayPause}
            className={classes.constrolIcons}
            aria-label="reqind"
          >
            <PlayArrowOutlined fontSize="inherit" />
          </IconButton>
        )}

        <IconButton onClick={onForward} className={classes.constrolIcons} aria-label="reqind">
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
            {playing ? (
              <IconButton
                onClick={onPlayPause}
                className={classes.bottomControls}
              >
                <PauseOutlined fontSize="large" />
              </IconButton>
            ) : (
              <IconButton
                onClick={onPlayPause}
                className={classes.bottomControls}
              >
                <PlayArrowOutlined fontSize="large" />
              </IconButton>
            )}
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
              <Button
                varient="text"
                style={{ marginLeft: 16 }}
                className={classes.bottomControls}
              >
                <Typography>10:20</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={handleClick}
            varient="text"
            className={classes.bottomControls}
          >
            <Typography>1x</Typography>
          </Button>

          {/* popover component */}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Grid container direction="column-reverse">
              {[0.5, 1, 1.5, 2].map((rate) => (
                <Button>
                  <Typography vairent="text" color="primary">
                    {rate}
                  </Typography>
                </Button>
              ))}
            </Grid>
          </Popover>

          <IconButton className={classes.bottomControls}>
            <Fullscreen fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Controls;
