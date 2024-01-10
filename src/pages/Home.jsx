import React from "react";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Programs from "../components/Programs";
import Sponser from "../components/Sponsors";
import WayToGo from "../components/WayToGo";
import Faqs from "../components/Faqs";
import { BackToTop } from "../components/globalStyledComponents";

export default function Home() {
  React.useEffect(
    function () {
      document.title = `게으른 개발자 컨퍼런스`;
    },
  );

  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Programs />
        <Sponser />
        <WayToGo />
        <Faqs />
      </main>
      <BackToTop home={"Home"} />
    </>
  );
}
