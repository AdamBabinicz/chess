import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  MoreHoriz,
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../images/5-5.jpg";

// CSS styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "rgb(60, 60, 63)",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: ".5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
    transition: "all 0.3s",
    "&:hover": {
      color: "tomato",
    },
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Start",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Moja ścieżka",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Rozgrywki",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Kontakt",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{
            background: "rgb(42, 42, 44)",
            position: "fixed",
            zIndex: "1",
          }}
        >
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MoreHoriz style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="5" style={{ color: "tan" }}>
              Portfolio szachisty
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
