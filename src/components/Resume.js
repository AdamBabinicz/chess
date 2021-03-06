import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core/";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "rgb(30, 28, 54)",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "#fff",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    // textTransform: "capitalize",
    paddingTop: "6rem",
  },
  subHeading: {
    color: "#fff",
    padding: "0",
    // textTransform: "capitalize",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          moja ??cie??ka szachisty
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              IV Otwarty Og??lnopolski Memoria?? Szachowy Pracownik??w Firm
              Budowlanych, Przemys??u Materia????w Budowlanych, Przemys??u Drzewnego
              i Le??nego im. architekta Kazimierza Prokulskiego.
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              09 listopada 2019 r. - 10 listopada 2019 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zdobycie IV kategorii (Dyplom).
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              VII Memoria?? Szachowy im. Jana Nied??wieckiego
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              04 grudnia 2019 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              6 miejsce uchonorowane Dyplomem.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              IX Memoria?? Trener??w Szachowych MDK, ch??opcy do lat 18
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              2020 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie 2 miejsca - Puchar.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              IV Turniej Szachowy ??wi??tego Kazimierza Patrona Radomia
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              19 lutego 2020 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Udzia??.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Grand Prix'2020 "Zamiast gier komputerowych zagraj kilka rund
              szachowych"
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              23 kwietnia 2020 r. - 03 grudnia 2020 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Udzia?? (??rodkowe miejsce w tabeli rozgrywek).
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              I Klasyfikacyjny Turniej Szachowy ???Dolina Krzemowa nad Mleczn?????
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              03 marca 2021 r. do 7 kwietnia 2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Udzia??.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              II Turniej Szachowy o Puchar Firmy MK-Klimat
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie drugiego miejsca.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Mistrzostwa Szk???? Wy??szych
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie drugiego miejsca.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Korwin Cup
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              26 czerwca 2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie ??smego miejsca na 30 uczestnik??w.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              IV Turniej Szachowy w O??rodku wypoczynkowym Krokodyl
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              01 sierpnia 2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie sz??stego miejsca na 34 uczestnik??w.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              III Turniej Szachowy Radomski Czerwiec' 76
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              14 lipca - 06 pa??dziernika 2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zdobycie III kategorii (zaj??cie trzeciego miejsca).
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              V Memoria?? Szachowy im. Stanleya Krol
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              13 - 27 pa??dziernika 2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie trzeciego miejsca.
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              I Turniej o Puchar Burmistrza Miasta Pionki w szachach
              b??yskawicznych
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              27 listopada 2021 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie czternastego miejsca na 24 uczestnik??w.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2022
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              II Turniej Szachowy o Puchar Firmy KNM Kominy Na Miar?? Janusza
              Domaga??y
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              09 marca - 20 kwietnia 2022 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie czwartego miejsca na 12 uczestnik??w.
            </Typography>
          </Box>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Refleks(ja) Szachisty - Prolog
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              19 czerwca 2022 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie trzeciego miejsca na 17 uczestnik??w.
            </Typography>
          </Box>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Grand Prix Ziemi Szyd??owieckiej - Bitwa pod Guzowem 1607 - FIDE
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              03 lipca 2022 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Zaj??cie dwudziestego trzeciego miejsca na 28 uczestnik??w.
            </Typography>
          </Box>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Symultana szachowa z arcymistrzem Zbigniewem Paklez?? w Przysusze
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              17 lipca 2022 r.
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Udzia?? w gronie 30 uczestnik??w.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
