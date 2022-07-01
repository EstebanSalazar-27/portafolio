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
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created by using create-react-app and this is my professional portfolio" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <title>Esteban Salazar Portfolio</title>


      </Helmet>
      <ThemeProvider theme={isDarkModeActived === true ? darkMode : lightMode}>
        <GlobalStyles />
        <SwitchBtn setIsDarkModeActived={setIsDarkModeActived} handleMode={handleMode} />
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
