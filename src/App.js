import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StarsCanvas from "./components/canvas/Stars";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90%;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Navbar />
      <Body>
        <StarsCanvas />
        <div>
        <About />
        <Skills />
        <Experience />
        <Education />
        </div>
      </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
