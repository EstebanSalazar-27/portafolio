import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next';
import Photo from '../../images/esteban.jpeg'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';

export const DecoratedSection = styled.section`
   
    clip-path:${({ clipPath }) => clipPath};
    padding: 2rem .5rem;
    width: 100%;
    min-width: 200px;
    height: auto;
    min-height: ${({ minHeight }) => minHeight || "88vh"};
    box-shadow:0 10px 10px  ${({ theme }) => theme.shadowSections},
    0 -10px 10px  ${({ theme }) => theme.shadowSections};
    background-image: ${({ color }) => color || "linear-gradient(135deg,#00b4db,#0083b0)"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:3rem;
    position: relative;
    z-index: 0;
    @media (max-width:768px) {
        text-align: center;
    }

`

export const CommonText = styled.p`
    color: ${({ theme }) => theme.contrastText};
    letter-spacing: .2px;
  
`
const AboutArticle = styled.article`
    display: flex;
    justify-content: space-around;
    gap:5rem;
    width: 80%;
    max-width: 1000px;
    @media (max-width:768px) {
        flex-wrap: wrap;
    }
    
`
const Cont = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
   
    img{
       width: 100%;
       min-width: 360px;
        
    }
    @media (max-width:768px) {
        flex-basis: 80%;
    }
    
`
const About = (props) => {
    const { t } = props
    return (
        <DecoratedSection {...props} id='about'>
            <div data-aos="fade-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true">
                <Header color="#fff">{t("about.header")}</Header>
            </div>

            <AboutArticle>
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    data-aos-delay="200"
                    data-aos-once="true">
                    <Cont><img src={Photo} alt="" /></Cont>
                </div>


                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    <Cont >
                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }} >
                            <CommonText>
                                {t("about.about_me")}
                            </CommonText>
                            <div>
                                <Button bgColorBefore="linear-gradient(135deg,#ffffff,#ffffff)" bgColor="linear-gradient(135deg,#ffffff,#ffffff)" borderColor="linear-gradient(135deg,#ffffff,#ffffff)" size="md" url={`https://drive.google.com/file/d/1GwCtuCAWMAwU0TvrFIGalI7L4uufHfhi/view?usp=sharing`}>Curriculum</Button>
                            </div>
                        </div>
                    </Cont>
                </div>


            </AboutArticle>
        </DecoratedSection>
    )
}

const AboutWrapped = withNamespaces()(About)

export default AboutWrapped