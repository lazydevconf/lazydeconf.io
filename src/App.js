import React, { useState } from "react";
import { useAppContext } from "./appContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGitHubInfo,
  selectError,
  selectIsLoading,
} from "./pages/homeSlice";
import { fetchGitHubReops } from "./pages/allProjectsSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { ThemeProvider } from "styled-components";
// Data
import { navLogo } from "./data";
// Components
import { Container } from "react-bootstrap";
import { Loading } from "./components/globalStyledComponents";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
// Pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

const themes = {
  light: {
    name: "light",
    color: "black",
    background: "white",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function App() {
  const { theme, setTheme } = useAppContext();
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center">
          <Loading />
        </Container>
      </ThemeProvider>
    );
  }else {
    return (
        <HashRouter>
          <ThemeProvider theme={themes[theme]}>
            <ScrollToTop />
            <GlobalStyles />
            <Element name={"Home"} id="home">
              <NavBar Logo={navLogo} />
            </Element>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/All-Projects" element={<AllProjects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </HashRouter>
    );
  }
}
