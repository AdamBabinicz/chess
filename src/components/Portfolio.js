import React, { useState } from "react";
import Popup from "./Popup";
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

import img0 from "../images/27.jpg";
import img1 from "../images/41.jpg";
import img2 from "../images/20.jpg";
import img3 from "../images/statua.jpg";
import img4 from "../images/24.jpg";
import img5 from "../images/game.png";
import img6 from "../images/7.jpg";
import img8 from "../images/43.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/29.jpg";
import img12 from "../images/springer.svg";
import img13 from "../images/11.jpg";
import img14 from "../images/33.jpg";
import img15 from "../images/36.jpg";
import img16 from "../images/chess.avif";
import img17 from "../images/44.avif";
import img18 from "../images/magnat.avif";
import img19 from "../images/2_.png";
import img20 from "../images/przysucha2026_.avif"; // <-- podmień na nazwę pliku do popupa

import project0 from "../images/27.avif";
import project1 from "../images/1.avif";
import project3 from "../images/3.avif";
import project4 from "../images/45.avif";
import project5 from "../images/21.avif";
import project6 from "../images/40.avif";
import project7 from "../images/5.avif";
import project8 from "../images/42.avif";
import project9 from "../images/8.avif";
import project10 from "../images/28.avif";
import project11 from "../images/31.avif";
import project12 from "../images/32.avif";
import project13 from "../images/12.avif";
import project14 from "../images/34.avif";
import project15 from "../images/35.avif";
import project16 from "../images/mdk.avif";
import project17 from "../images/37.avif";
import project18 from "../images/leb4.avif";
import project19 from "../images/2.png";
import project20 from "../images/przysucha2026.avif"; // <-- podmień na nazwę pliku na kartę

const useStyles = makeStyles({
  mainContainer: {
    background: "rgb(30, 28, 54)",
    paddingTop: "6rem",
    paddingLeft: "6rem",
    paddingRight: "6rem",

    "@media (max-width: 768px)": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  cardContainer: {
    maxWidth: "90%",
    maxHeight: "100%",
    margin: "5rem auto",

    "@media (max-width: 768px)": {
      margin: "1rem auto",
    },
  },
  cardImage: {
    maxWidth: "100%",
    height: "660px",
    objectFit: "cover",
  },
});

const tournaments = [
  {
    cardTitle:
      "I Grand Prix w Szachach Miasta i Gminy Przysucha 2026 - I edycja",
    cardDescription: "Zajęcie 6 miejsca na 25 uczestników (4,5/7 pkt.).",
    cardImage: project20,
    popupTitle:
      "I Grand Prix w Szachach Miasta i Gminy Przysucha 2026 - I edycja",
    popupImage: img20,
    popupDate: "22.11.2026'",
    popupResult: "6/25 (4,5/7 pkt.)",
  },
  {
    cardTitle: "I Turniej witomiński w szachach szybkich 2026",
    cardDescription: "Zajęcie 35 miejsca na 56 uczestników (zdobycie 4.0 pkt).",
    cardImage: project19,
    popupTitle: "I Turniej witomiński w szachach szybkich 2026",
    popupImage: img19,
    popupDate: "10.01.2026'",
    popupResult: "35/56",
  },
  {
    cardTitle: "Karnawałowy Turniej Szachowy o 3 stówki - OPEN w Lęborku",
    cardDescription: "Zajęcie 16 miejsca na 30 uczestników.",
    cardImage: project18,
    popupTitle: "Karnawałowy Turniej Szachowy o 3 stówki - OPEN",
    popupImage: img18,
    popupDate: "02.02.2025'",
    popupResult: "16/30",
  },
  {
    cardTitle: "XII Memoriał Szachowy im. Jana Niedźwieckiego w Radomiu",
    cardDescription: "Zajęcie 6 miejsca na 26 uczestników.",
    cardImage: project17,
    popupTitle: "XII Memoriał Szachowy im. Jana Niedźwieckiego",
    popupImage: img17,
    popupDate: "07-08.12.2024'",
    popupResult: "6/26",
  },
  {
    cardTitle:
      "Turniej szachowy z okazji 106 rocznicy ogłoszenia niepodległości Polski (internet)",
    cardDescription: "Zajęcie 4 miejsca na 9 uczestników (nagroda pieniężna).",
    cardImage: project16,
    popupTitle:
      "Turniej szachowy z okazji 106 rocznicy ogłoszenia niepodległości Polski (internet)",
    popupImage: img16,
    popupDate: "07.10.2024'",
    popupResult: "4/9",
  },
  {
    cardTitle: "POSTDATA OPEN B w Gdańsku",
    cardDescription: "Zajęcie 4 miejsca na 37 uczestników.",
    cardImage: project15,
    popupTitle: "POSTDATA OPEN B w Gdańsku 2022",
    popupImage: img15,
    popupDate: "03-04.12.2022'",
    popupResult: "4/37",
  },
  {
    cardTitle: "XI Turniej witomiński w szachach szybkich 2022 w Gdyni",
    cardDescription: "Zajęcie 29 miejsca na 52 uczestników.",
    cardImage: project14,
    popupTitle: "XI Turniej witomiński w szachach szybkich 2022",
    popupImage: img14,
    popupDate: "12.11.2022'",
    popupResult: "29/52",
  },
  {
    cardTitle:
      "Symultana szachowa z arcymistrzem Zbigniewem Paklezą w Przysusze",
    cardDescription: "Udział w gronie 30 uczestników.",
    cardImage: project13,
    popupTitle:
      "Symultana szachowa z arcymistrzem Zbigniewem Paklezą w Przysusze",
    popupImage: img13,
    popupDate: "17.07.2022'",
    popupResult: "30/30",
  },
  {
    cardTitle:
      "Grand Prix Ziemi Szydłowieckiej - Bitwa pod Guzowem 1607 - FIDE",
    cardDescription: "Zajęcie 23 miejsca.",
    cardImage: project12,
    popupTitle:
      "Grand Prix Ziemi Szydłowieckiej - Bitwa pod Guzowem 1607 - FIDE",
    popupImage: img12,
    popupDate: "03.07.2022'",
    popupResult: "23/28",
  },
  {
    cardTitle: "Refleks(ja) Szachisty - Prolog",
    cardDescription: "Zajęcie 3 miejsca - Nagroda pieniężna.",
    cardImage: project11,
    popupTitle: "Refleks(ja) Szachisty - Prolog",
    popupImage: img11,
    popupDate: "19.06.2022'",
    popupResult: "3/17",
  },
  {
    cardTitle:
      "II Turniej Szachowy o Puchar Firmy KNM Kominy Na Miarę Janusza Domagały",
    cardDescription: "Zajęcie 4 miejsca - Dyplom.",
    cardImage: project10,
    popupTitle:
      "II Turniej Szachowy o Puchar Firmy KNM Kominy Na Miarę Janusza Domagały",
    popupImage: img10,
    popupDate: "09.03 - 20.04.2022'",
    popupResult: "4/12",
  },
  {
    cardTitle:
      "I Turniej o Puchar Burmistrza Miasta Pionki w szachach błyskawicznych",
    cardDescription: "Zajęcie 14 miejsca - Dyplom.",
    cardImage: project8,
    popupTitle:
      "I Turniej o Puchar Burmistrza Miasta Pionki w szachach błyskawicznych",
    popupImage: img8,
    popupDate: "27.11.2021'",
    popupResult: "14/24",
  },
  {
    cardTitle: "V Memoriał Szachowy im. Stanleya Krol",
    cardDescription: "Zajęcie 3 miejsca - Medal.",
    cardImage: project9,
    popupTitle: "V Memoriał Szachowy im. Stanleya Krol",
    popupImage: img9,
    popupDate: "13 - 27.10.2021'",
    popupResult: "3/24",
  },
  {
    cardTitle: "Korwin Cup",
    cardDescription: "Zajęcie 8 miejsca - Dyplom.",
    cardImage: project7,
    popupTitle: "Korwin Cup",
    popupImage: img6,
    popupDate: "26.06.2021'",
    popupResult: "8/30",
  },
  {
    cardTitle: "Mistrzostwa Szkół Wyższych",
    cardDescription: "Zajęcie 2 miejsca - Puchar.",
    cardImage: project6,
    popupTitle: "Mistrzostwa Szkół Wyższych",
    popupImage: img1,
    popupDate: "17.04.2021'",
    popupResult: "2/14",
  },
  {
    cardTitle: "II Turniej Szachowy o Puchar Firmy MK-Klimat",
    cardDescription: "Zajęcie 2 miejsca - Puchar.",
    cardImage: project5,
    popupTitle: "II Turniej Szachowy o Puchar Firmy MK-Klimat",
    popupImage: img2,
    popupDate: "03.03.2021' - 31.03.2021'",
    popupResult: "2/28",
  },
  {
    cardTitle: "IV Turniej Szachowy Świętego Kazimierza Patrona Radomia",
    cardDescription:
      "W wyniku rozgrywek zwyciężył Mariusz Ćwiek przed Markiem Niedźwieckim i Stanisławem Waszkiewiczem.",
    cardImage: project1,
    popupTitle: "IV Turniej Szachowy Świętego Kazimierza Patrona Radomia",
    popupImage: img4,
    popupDate: "19.02.2020'",
    popupResult: "udział",
  },
  {
    cardTitle: "IX Memoriał Trenerów Szachowych MDK, chłopcy do lat 18",
    cardDescription: "Zajęcie 2 miejsca - Puchar.",
    cardImage: project4,
    popupTitle: "IX Memoriał Trenerów Szachowych MDK, chłopcy do lat 18",
    popupImage: img3,
    popupDate: "07.02.2020'",
    popupResult: "Zajęcie 2 miejsca - Puchar",
  },
  {
    cardTitle: "VII Memoriał Szachowy im. Jana Niedźwieckiego",
    cardDescription:
      "Nagrody w postaci szachowych elektronicznych zegarów i medale ufundowała Firma Biuro Rachunkowe GREGFIN Marii i Pawła Gregorek ...",
    cardImage: project3,
    popupTitle: "VII Memoriał Szachowy im. Jana Niedźwieckiego",
    popupImage: img5,
    popupDate: "04.12.2019'",
    popupResult: "9/12",
  },
  {
    cardTitle:
      "IV Otwarty Ogólnopolski Memoriał Szachowy Pracowników Firm Budowlanych, ...",
    cardDescription: "Zdobycie IV kategorii (Dyplom).",
    cardImage: project0,
    popupTitle:
      "IV Otwarty Ogólnopolski Memoriał Szachowy Pracowników Firm Budowlanych, ...",
    popupImage: img0,
    popupDate: "09-10.2019' - 11.2019'",
    popupResult: "Zdobycie IV kategorii (Dyplom)",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handleSetTrigger = (index) => (valueOrUpdater) => {
    setOpenPopupIndex((prev) => {
      const isOpen = prev === index;
      const next =
        typeof valueOrUpdater === "function"
          ? valueOrUpdater(isOpen)
          : valueOrUpdater;
      return next ? index : null;
    });
  };

  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {tournaments.map((tournament, index) => (
            <Grid item xs={12} sm={8} md={6} key={tournament.cardTitle}>
              <Card className={classes.cardContainer}>
                <CardActionArea onClick={() => setOpenPopupIndex(index)}>
                  <CardMedia
                    className={classes.cardImage}
                    component="img"
                    alt={tournament.cardTitle}
                    image={tournament.cardImage}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {tournament.cardTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {tournament.cardDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => setOpenPopupIndex(index)}
                  >
                    Więcej
                  </Button>
                </CardActions>
                <Popup
                  trigger={openPopupIndex === index}
                  setTrigger={handleSetTrigger(index)}
                >
                  <h3>{tournament.popupTitle}</h3>
                  <br />
                  <img
                    src={tournament.popupImage}
                    alt={tournament.popupTitle}
                  />
                  <br />
                  <p>{tournament.popupDate}</p>
                  <br />
                  <em>{tournament.popupResult}</em>
                  <br />
                </Popup>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
