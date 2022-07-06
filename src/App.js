
import { useEffect, useState } from 'react';
// Themes
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './themes/themes';
// Styles
import './App.css';
import { GlobalStyles } from './themes/GlobalStyles';

// Components
import { SwitchBtn } from './themes/SwitchBtn/SwitchBtn';
import { HeroWrapped } from './sections/Hero/Hero';
import AboutWrapped, { About } from './sections/About/About';
import { ProjectsWrapped } from './sections/Projects/Projects';
import { MetaDatos } from './SEO/MetaDatos';
import { Skills } from './sections/Skills/Skills';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import { FieldLanguageWrapped } from './components/FieldLanguage/FieldLanguage';
import { Footer } from './sections/Footer/Footer';

const WrapperSection = styled.section`
margin:  0 auto;
width: 80%;
height: 100%;
`
const MyNavbar = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
gap: 2rem;

`
function App(props) {
  const [isDarkModeActived, setIsDarkModeActived] = useState(true)

  const handleMode = () => {
    setIsDarkModeActived(!isDarkModeActived)
    localStorage.setItem("theme", isDarkModeActived)

  }
  useEffect(() => {
    const themePreferencesUser = JSON.parse(localStorage.getItem("theme"))
    console.log(themePreferencesUser)
    if (themePreferencesUser) {
      setIsDarkModeActived(themePreferencesUser === "true" ? true : false)
    }
  }, []);

  return (

    <div className="App">

      {/* SEO HELMET */}
      <MetaDatos />
      {/* Themes */}
      <ThemeProvider theme={isDarkModeActived === true ? darkMode : lightMode}>
        {/* Globals Styles */}
        <GlobalStyles />
        {/* Handle Themes Button */}
        <MyNavbar>
          <FieldLanguageWrapped is />
          <SwitchBtn isDarkModeActived={isDarkModeActived} setIsDarkModeActived={setIsDarkModeActived} handleMode={handleMode} />

        </MyNavbar>


        {/* Sections */}
        <WrapperSection>
          <HeroWrapped />
        </WrapperSection>

        <AboutWrapped />

        <WrapperSection>
          <ProjectsWrapped />
        </WrapperSection>

        <Skills />
        <Footer />
      </ThemeProvider>
    </div>

  );
}

const AppWrapped = withNamespaces()(App)
export default AppWrapped;


