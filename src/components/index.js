import React, { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";

const Particles = lazy(() => import("react-particles-js"));

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.3,
    pointerEvents: "none",
  },
});

const particlesParams = {
  particles: {
    number: {
      value: 45,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    shape: {
      type: "square",
      stroke: {
        width: 1,
        color: "tomato",
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: true,
        speed: 6,
        size_min: 0.1,
        sync: true,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: true,
      },
    },
  },
};

const Home = () => {
  const classes = useStyles();
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setShowParticles(true), {
        timeout: 1000,
      });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(() => setShowParticles(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showParticles && (
        <Suspense fallback={null}>
          <Particles
            canvasClassName={classes.particlesCanva}
            params={particlesParams}
          />
        </Suspense>
      )}
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
