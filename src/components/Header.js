import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/6.jpg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
    letterSpacing: "0.8rem",
    fontWeight: "700",
    // marginTop: "5rem",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    // zIndex: 1,
    marginTop: "8rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Szachy <br/> - moja pasja!"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h2">
        <Typed
          strings={[
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
