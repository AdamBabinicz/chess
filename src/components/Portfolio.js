import React, { useState } from "react";
import Popup from "./Popup";
import { makeStyles } from "@material-ui/core/styles";
import img0 from "../images/27.jpg";
import img1 from "../images/41.jpg";
import img2 from "../images/20.jpg";
import img3 from "../images/statua.jpg";
import img4 from "../images/24.jpg";
import img5 from "../images/game.png";
import img6 from "../images/7.jpg";
import img7 from "../images/mans.svg";
import img8 from "../images/43.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/29.jpg";
import img12 from "../images/springer.svg";
import img13 from "../images/11.jpg";
import img14 from "../images/33.jpg";
import img15 from "../images/chess.jpg";
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
import project0 from "../images/27.jpg";
import project1 from "../images/1.jpg";
import project2 from "../images/2.jpg";
import project3 from "../images/3.jpg";
import project4 from "../images/mdk.jpg";
import project5 from "../images/21.jpg";
import project6 from "../images/40.jpg";
import project7 from "../images/5.jpg";
import project8 from "../images/42.jpg";
import project9 from "../images/8.jpg";
import project10 from "../images/28.jpg";
import project11 from "../images/31.jpg";
import project12 from "../images/32.jpg";
import project13 from "../images/12.jpg";
import project14 from "../images/34.jpg";
import project15 from "../images/1.png";

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
  cardImage: {
    maxWidth: "100%",
    maxHeight: "660px",
    objectFit: "cover",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  const [state] = useState({
    title: "Mistrzostwa Szkół Wyższych",
    img: img1,
    p: "17.04.2021'",
    em: "2/14",

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
    em4: "udział",

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
    img0: img0,
    p7: "09-10.2019' - 11.2019'",
    em7: "Zdobycie IV kategorii (Dyplom)",

    title7:
      "I Turniej o Puchar Burmistrza Miasta Pionki w szachach błyskawicznych",
    img8: img8,
    p8: "27.11.2021'",
    em8: "14/24",

    title8: "V Memoriał Szachowy im. Stanleya Krol",
    img9: img9,
    p9: "13 - 27.10.2021'",
    em9: "3/24",

    title9:
      "II Turniej Szachowy o Puchar Firmy KNM Kominy Na Miarę Janusza Domagały",
    img10: img10,
    p10: "09.03 - 20.04.2022'",
    em10: "4/12",

    title10: "Refleks(ja) Szachisty - Prolog",
    img11: img11,
    p11: "19.06.2022'",
    em11: "3/17",

    title11: "Symultana szachowa z arcymistrzem Zbigniewem Paklezą w Przysusze",
    img13: img13,
    p13: "17.07.2022'",
    em13: "30/30",

    title12: "Grand Prix Ziemi Szydłowieckiej - Bitwa pod Guzowem 1607 - FIDE",
    img12: img12,
    p12: "03.07.2022'",
    em12: "23/28",

    title13: "XI Turniej witomiński w szachach szybkich 2022",
    img14: img14,
    p14: "12.11.2022'",
    em14: "29/52",

    title14: "POSTDATA OPEN B w Gdańsku 2022",
    img15: img15,
    p15: "03-04.12.2022'",
    em15: "00/00",
  });
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);
  const [buttonPopup5, setButtonPopup5] = useState(false);
  const [buttonPopup6, setButtonPopup6] = useState(false);
  const [buttonPopup7, setButtonPopup7] = useState(false);
  const [buttonPopup8, setButtonPopup8] = useState(false);
  const [buttonPopup9, setButtonPopup9] = useState(false);
  const [buttonPopup10, setButtonPopup10] = useState(false);
  const [buttonPopup11, setButtonPopup11] = useState(false);
  const [buttonPopup12, setButtonPopup12] = useState(false);
  const [buttonPopup13, setButtonPopup13] = useState(false);
  const [buttonPopup14, setButtonPopup14] = useState(false);
  const [buttonPopup15, setButtonPopup15] = useState(false);

  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Project 15 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 15"
                  height="auto"
                  image={project15}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    POSTDATA OPEN B w Gdańsku
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie ... miejsca na ... uczestników.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup15(true)}
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
              <Popup trigger={buttonPopup15} setTrigger={setButtonPopup15}>
                <h3>{state.title14}</h3>
                <br />
                <img src={state.img15} alt="..." /> <br />
                <p>{state.p15}</p>
                <br />
                <em>{state.em15}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 14 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 14"
                  height="auto"
                  image={project14}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    XI Turniej witomiński w szachach szybkich 2022 w Gdyni
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 29 miejsca na 52 uczestników.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup14(true)}
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
              <Popup trigger={buttonPopup14} setTrigger={setButtonPopup14}>
                <h3>{state.title13}</h3>
                <br />
                <img src={state.img14} alt="..." /> <br />
                <p>{state.p14}</p>
                <br />
                <em>{state.em14}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 13 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 13"
                  height="auto"
                  image={project13}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Symultana szachowa z arcymistrzem Zbigniewem Paklezą w
                    Przysusze
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Udział w gronie 30 uczestników.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup13(true)}
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
              <Popup trigger={buttonPopup13} setTrigger={setButtonPopup13}>
                <h3>{state.title11}</h3>
                <br />
                <img src={state.img13} alt="..." /> <br />
                <p>{state.p13}</p>
                <br />
                <em>{state.em13}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 12 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 12"
                  height="auto"
                  image={project12}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Grand Prix Ziemi Szydłowieckiej - Bitwa pod Guzowem 1607 -
                    FIDE
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 23 miejsca.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup12(true)}
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
              <Popup trigger={buttonPopup12} setTrigger={setButtonPopup12}>
                <h3>{state.title12}</h3>
                <br />
                <img src={state.img12} alt="..." /> <br />
                <p>{state.p12}</p>
                <br />
                <em>{state.em12}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 11 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 11"
                  height="auto"
                  image={project11}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Refleks(ja) Szachisty - Prolog
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 3 miejsca - Nagroda pieniężna.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup11(true)}
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
              <Popup trigger={buttonPopup11} setTrigger={setButtonPopup11}>
                <h3>{state.title10}</h3>
                <br />
                <img src={state.img11} alt="..." /> <br />
                <p>{state.p11}</p>
                <br />
                <em>{state.em11}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 10 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 10"
                  height="auto"
                  image={project10}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    II Turniej Szachowy o Puchar Firmy KNM Kominy Na Miarę
                    Janusza Domagały
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 4 miejsca - Dyplom.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup10(true)}
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
              <Popup trigger={buttonPopup10} setTrigger={setButtonPopup10}>
                <h3>{state.title9}</h3>
                <br />
                <img src={state.img10} alt="..." /> <br />
                <p>{state.p10}</p>
                <br />
                <em>{state.em10}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 8 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 8"
                  height="auto"
                  image={project8}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    I Turniej o Puchar Burmistrza Miasta Pionki w szachach
                    błyskawicznych
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 14 miejsca - Dyplom.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup8(true)}
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
              <Popup trigger={buttonPopup8} setTrigger={setButtonPopup8}>
                <h3>{state.title7}</h3>
                <br />
                <img src={state.img8} alt="..." /> <br />
                <p>{state.p8}</p>
                <br />
                <em>{state.em8}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 9 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  alt="Project 9"
                  height="auto"
                  image={project9}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    V Memoriał Szachowy im. Stanleya Krol
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Zajęcie 3 miejsca - Medal.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setButtonPopup9(true)}
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
              <Popup trigger={buttonPopup9} setTrigger={setButtonPopup9}>
                <h3>{state.title8}</h3>
                <br />
                <img src={state.img9} alt="..." /> <br />
                <p>{state.p9}</p>
                <br />
                <em>{state.em9}</em>
                <br />
              </Popup>
            </Card>
          </Grid>

          {/* Project 7 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
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
                  className={classes.cardImage}
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
                  className={classes.cardImage}
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
                  className={classes.cardImage}
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
                  className={classes.cardImage}
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
                  className={classes.cardImage}
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
                  className={classes.cardImage}
                  component="img"
                  alt="Project 8"
                  height="auto"
                  image={project0}
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
                <img src={state.img0} alt="..." /> <br />
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
