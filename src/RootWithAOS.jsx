import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppMain from "./App.jsx";

const RootWithAOS = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 60,
      easing: "ease-in-out",
    });
  }, []);
  return <AppMain />;
};

export default RootWithAOS;
