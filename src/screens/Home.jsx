import React, { lazy } from "react";
const HomeSection = lazy(() => import("../components/HomeSection"));
const AboutMe = lazy(() => import("../components/AboutMe"));
const Services = lazy(() => import("../components/Services"));
const Work = lazy(() => import("../components/Work"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMe />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
