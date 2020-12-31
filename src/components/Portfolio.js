import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/1.jpg";
import project2 from "../images/2.jpg";
import project3 from "../images/3.jpg";
import project4 from "../images/mdk.jpg";

const useStyles = makeStyles({
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minMax(300px, auto))",
    background: "rgb(30, 28, 54)",
    paddingTop: "6rem",
  },
  cardContainer: {
    maxWidth: "90%",
    maxHeight: "100%",
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="auto"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    IX Memoriał Trenerów Szachowych MDK, chłopcy do lat 18
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 2 miejsca - Puchar.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="auto"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    IV Turniej Szachowy Świętego Kazimierza Patrona Radomia -
                    19.02.2020 r.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    W wyniku rozgrywek zwyciężył Mariusz Ćwiek przed Markiem
                    Niedźwieckim i Stanisławem Waszkiewiczem.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="auto"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    IV Turniej Szachowy Świętego Kazimierza Patrona Radomia -
                    19.02.2020 r.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    W wyniku rozgrywek zwyciężył Mariusz Ćwiek przed Markiem
                    Niedźwieckim i Stanisławem Waszkiewiczem.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="auto"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    VII Memoriał Szachowy im. Jana Niedźwieckiego - 04.12.2019
                    r.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Nagrody w postaci szachowych elektronicznych zegarów i
                    medale ufundowała Firma Biuro Rachunkowe GREGFIN Marii i
                    Pawła Gregorek ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
