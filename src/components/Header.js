import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/viki1.avif";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    aspectRatio: "1 / 1",
    flexShrink: 0,
  },
  title: {
    color: "tomato",
    letterSpacing: "0.8rem",
    fontWeight: "700",
    fontSize: "2.5rem",
    lineHeight: 1.25,
    minHeight: "6.5rem",
    marginBottom: "1.5rem",
    padding: "0 1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.1rem",
      letterSpacing: "0.35rem",
      minHeight: "5.5rem",
    },
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
    fontSize: "1.5rem",
    lineHeight: 1.4,
    minHeight: "5rem",
    padding: "0 1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
      minHeight: "4.5rem",
    },
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "8rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box component="main" className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Wiktor - szachista"
          imgProps={{ width: 240, height: 240, decoding: "async" }}
        />
      </Grid>
      <Typography className={classes.title} variant="h1">
        <Typed
          strings={["Szachy <br/> - moja pasja!"]}
          typeSpeed={40}
          showCursor={false}
        />
      </Typography>
      <Typography className={classes.subtitle} variant="h2">
        <Typed
          strings={[
            "Rank. FIDE (Blitz): 1776 | (Rapid): 1485",
            "Tytuł/Kat.: III",
            "♔ king",
            "♕ queen",
            "♖ rook/castle",
            "♗ bishop",
            "♘ knight",
            "♙ pawn",
            "♚ king",
            "♛ queen",
            "♜ rook/castle",
            "♝ bishop",
            "♞ knight",
            "♟ pawn",
          ]}
          typeSpeed={300}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
