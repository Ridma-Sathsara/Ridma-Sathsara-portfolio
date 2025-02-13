import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
// import Services from "./components/Services/Services.js";
import Preloader from "./components/Preloader/Preloader.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(0, 34, 255, 0.15) 0%, rgba(255, 69, 0, 0) 50%), 
              linear-gradient(141.27deg, rgba(255, 165, 0, 0) 50%, rgba(34, 193, 195, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`




function App() {
  // eslint-disable-next-line
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {isLoading ? (<Preloader />) : (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router >
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              {/* <Services/> */}
              <Skills />
              {/* <Experience /> */}
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
          </Body>
        </Router>
      </ThemeProvider>
      )}
    </div>
  );
};

export default App;
