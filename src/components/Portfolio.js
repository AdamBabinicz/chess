import React, { useState } from "react";
import Popup from "./Popup";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../images/41.jpg";
import img2 from "../images/20.jpg";
import img3 from "../images/statua.jpg";
import img4 from "../images/24.jpg";
import img5 from "../images/cross.png";
import img6 from "../images/7.jpg";
import img7 from "../images/mans.svg";
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
import project5 from "../images/21.jpg";
import project6 from "../images/40.jpg";
import project7 from "../images/5.jpg";
import project8 from "../images/27.jpg";

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
  const [state] = useState({
    title: "Mistrzostwa Szkół Wyższych",
    img: img1,
    p: "17.04.2021'",
    em: "2/",

    title1: "II Turniej Szachowy o Puchar Firmy MK-Klimat",
    img2: img2,
    p1: "03.03.2021' - 31.03.2021'",
    em1: "2/28",

    title2: "IX Memoriał Trenerów Szachowych MDK, chłopcy do lat 18",
    img3: img3,
    p3: "07.02.2020'",
    em3: "Zajęcie 2 miejsca - Puchar",

    title3: "IV Turniej Szachowy Świętego Kazimierza Patrona Radomia",
    img4: img4,
    p4: "19.02.2020'",
    em4: "()&&&@@@)",

    title4: "VII Memoriał Szachowy im. Jana Niedźwieckiego",
    img5: img5,
    p5: "04.12.2019'",
    em5: "9/12",

    title5: "Korwin Cup",
    img6: img6,
    p6: "26.06.2021'",
    em6: "8/30",

    title6:
      "IV Otwarty Ogólnopolski Memoriał Szachowy Pracowników Firm Budowlanych, ...",
    img7: img7,
    p7: "09-10.2019' - 11.2019'",
    em7: "Zdobycie IV kategorii (Dyplom)",
  });
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);
  const [buttonPopup5, setButtonPopup5] = useState(false);
  const [buttonPopup6, setButtonPopup6] = useState(false);
  const [buttonPopup7, setButtonPopup7] = useState(false);

  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Project 7 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 6"
                  height="auto"
                  image={project7}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Korwin Cup
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 8 miejsca - Dyplom.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup6(true)}
                >
                  Więcej
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup(true)}
                >
                  Live Demo
                </Button> */}
              </CardActions>
              <Popup trigger={buttonPopup6} setTrigger={setButtonPopup6}>
                <h3>{state.title5}</h3>
                <br />
                <img src={state.img6} alt="..." /> <br />
                <p>{state.p6}</p>
                <br />
                <em>{state.em6}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 6 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 6"
                  height="auto"
                  image={project6}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Mistrzostwa Szkół Wyższych
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup(true)}
                >
                  Więcej
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup(true)}
                >
                  Live Demo
                </Button> */}
              </CardActions>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>{state.title}</h3>
                <br />
                <img src={state.img} alt="..." /> <br />
                <p>{state.p}</p>
                <br />
                <em>{state.em}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 5 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 5"
                  height="auto"
                  image={project5}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    II Turniej Szachowy o Puchar Firmy MK-Klimat
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup1(true)}
                >
                  Więcej
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup1(true)}
                >
                  Live Demo
                </Button> */}
              </CardActions>
              <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                <h3>{state.title1}</h3>
                <br />
                <img src={state.img2} alt="..." /> <br />
                <p>{state.p1}</p>
                <br />
                <em>{state.em1}</em>
                <br />
              </Popup>
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
                    IV Turniej Szachowy Świętego Kazimierza Patrona Radomia
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup4(true)}
                >
                  Więcej
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup4(true)}
                >
                  Live Demo
                </Button> */}
              </CardActions>
              <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
                <h3>{state.title3}</h3>
                <br />
                <img src={state.img4} alt="..." /> <br />
                <p>{state.p4}</p>
                <br />
                <em>{state.em4}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup3(true)}
                >
                  Więcej
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup3(true)}
                >
                  Live Demo
                </Button> */}
              </CardActions>
              <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
                <h3>{state.title2}</h3>
                <br />
                <img src={state.img3} alt="..." /> <br />
                <p>{state.p3}</p>
                <br />
                <em>{state.em3}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 2 */}
          {/* <Grid item xs={12} sm={8} md={6}>
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
          </Grid> */}

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
                    VII Memoriał Szachowy im. Jana Niedźwieckiego
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup5(true)}
                >
                  Więcej
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup5(true)}
                >
                  Live Demo
                </Button> */}
              </CardActions>
              <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
                <h3>{state.title4}</h3>
                <br />
                <img src={state.img5} alt="..." /> <br />
                <p>{state.p5}</p>
                <br />
                <em>{state.em5}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 8 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 8"
                  height="auto"
                  image={project8}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    IV Otwarty Ogólnopolski Memoriał Szachowy Pracowników Firm
                    Budowlanych, ...
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zdobycie IV kategorii (Dyplom).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup7(true)}
                >
                  Więcej
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup7(true)}
                >
                  Live Demo
                </Button> */}
              </CardActions>
              <Popup trigger={buttonPopup7} setTrigger={setButtonPopup7}>
                <h3>{state.title6}</h3>
                <br />
                <img src={state.img7} alt="..." /> <br />
                <p>{state.p7}</p>
                <br />
                <em>{state.em7}</em>
                <br />
              </Popup>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
