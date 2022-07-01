import { useState } from 'react';
// Themes
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './themes/themes';
// Styles
import './App.css';
import { GlobalStyles } from './themes/GlobalStyles';

// Components
import { SwitchBtn } from './themes/SwitchBtn/SwitchBtn';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Helmet } from "react-helmet"
import { MetaDatos } from './SEO/MetaDatos';


const WrapperSection = styled.section`
margin:  0 auto;
width: 80%;
height: 100%;
`

function App() {
  const [isDarkModeActived, setIsDarkModeActived] = useState(true)

  const handleMode = () => {
    setIsDarkModeActived(!isDarkModeActived)
  }
  return (
    <div className="App">
      
      {/* SEO HELMET */}
      <MetaDatos />
      {/* Themes */}
      <ThemeProvider theme={isDarkModeActived === true ? darkMode : lightMode}>
        {/* Globals Styles */}
        <GlobalStyles />
        {/* Handle Themes Button */}
        <SwitchBtn setIsDarkModeActived={setIsDarkModeActived} handleMode={handleMode} />

        {/* Sections */}
        <WrapperSection>
          <Hero />
        </WrapperSection>

        <About />

        <WrapperSection>
          <Projects />
        </WrapperSection>
      </ThemeProvider>
    </div>
  );
}

export default App;
