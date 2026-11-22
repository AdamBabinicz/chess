import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";

const Resume = lazy(() => import("./components/Resume"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contacts = lazy(() => import("./components/Contacts"));

function App() {
  return (
    <>
      <CssBaseline />
      <Suspense
        fallback={
          <div style={{ minHeight: "100vh", background: "rgb(30, 28, 54)" }} />
        }
      >
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
      </Suspense>
    </>
  );
}

export default App;
