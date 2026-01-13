import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import YouTube from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigation-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      transition: "all .3s",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "rgb(42, 42, 44)" }}>
      <Link
        className={classes.root}
        style={{ padding: 0 }}
        to="//www.facebook.com/radomski.szachista.3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <BottomNavigationAction icon={<Facebook />} />
      </Link>
      <Link
        className={classes.root}
        style={{ padding: 0 }}
        to="//twitter.com/holmespuaro"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <BottomNavigationAction icon={<Twitter />} />
      </Link>
      <Link
        className={classes.root}
        style={{ padding: 0 }}
        to="//www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <BottomNavigationAction icon={<YouTube />} />
      </Link>
    </BottomNavigation>
  );
};

export default Footer;
