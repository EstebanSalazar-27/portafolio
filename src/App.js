
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
import AboutWrapped from './sections/About/About';
import { ProjectsWrapped } from './sections/Projects/Projects';
import { MetaDatos } from './SEO/MetaDatos';
import { Skills } from './sections/Skills/Skills';
import { withNamespaces } from 'react-i18next';
import { FieldLanguageWrapped } from './components/FieldLanguage/FieldLanguage';
import { Footer } from './sections/Footer/Footer';
import { Loading } from './components/Loading/Loading';


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
  const [loading, setLoading] = useState(true)

  //  Dark mode handle and save to new change to local storage
  const handleMode = () => {
    setIsDarkModeActived(!isDarkModeActived)
    localStorage.setItem("theme", isDarkModeActived)

  }
  //  get theme from  local storage and save the value like user theme preferences 
  useEffect(() => {
    const themePreferencesUser = JSON.parse(localStorage.getItem("theme"))
    console.log(themePreferencesUser)
    if (themePreferencesUser) {
      setIsDarkModeActived(themePreferencesUser === "true" ? true : false)
    }
  }, []);

  //  Fake loading : Setting loading to false boolean and then when it's true render the page 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, [])




  return (

    <div className="App">


      {/* SEO HELMET */}
      <MetaDatos />
      {/* Themes */}
      <ThemeProvider theme={isDarkModeActived === true ? darkMode : lightMode}>
        {/* Globals Styles */}
        <GlobalStyles />
        {/* Handle Themes Button */}

        {
          loading
            ?
            <Loading />
            :
            <div>
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
            </div>

        }

      </ThemeProvider>
    </div>

  );
}

const AppWrapped = withNamespaces()(App)
export default AppWrapped;


