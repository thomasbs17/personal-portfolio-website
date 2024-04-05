import React, {useEffect, useState} from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {splashScreen} from "../portfolio";
import AboutMe from "./aboutMe/aboutMe";
import Achievement from "./achievement/Achievement";
import Education from "./education/Education";
import Greeting from "./greeting/Greeting";
import "./Main.scss";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import SplashScreen from "./splashScreen/SplashScreen";
import StartupProject from "./StartupProjects/StartupProject";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import WhyWorkingWithMe from "./workingWithMe/WorkingWIthMe";
import WorkExperience from "./workExperience/WorkExperience";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <AboutMe />
            <Skills />
            <WhyWorkingWithMe />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Twitter />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
