import React from 'react'
import styled from 'styled-components'
import Photo from '../../images/esteban.jpeg'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'


export const DecoratedSection = styled.section`
    margin-bottom: 3rem;
    clip-path:${({ clipPath }) => clipPath};
    padding: 2rem .5rem;
    width: 100%;
    min-width: 200px;
    height: auto;
    min-height: ${({ minHeight }) => minHeight || "88vh"};
    box-shadow:0 10px 10px  ${({ theme }) => theme.shadowSections},
    0 -10px 10px  ${({ theme }) => theme.shadowSections};
    background-image: linear-gradient(135deg,#00b4db,#0083b0);
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
export const About = () => {
    return (
        <DecoratedSection id='about'>
            <div data-aos="fade-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true">
                <Header color="#fff">Sobre mi</Header>
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
                                Naci y creci en Ciudad Guayana, Venezuela el 03 de enero del 2000, y actualmente resido en la ciudad de Buenos aires, Argentina. Soy un Frontend Developer. Mis principales pilares para el desarrollo front son JavaScript, ReactJs, CSS, SASS, Styled Components.<br /><br />
                                Soy apasionado a  lo que hago y me considero una persona organizada, autodidacta, disciplinada y colaboradora que le gusta  trabajar en equipo. Siempre busco aprender de mis compañeros, así como generar retroalimentación que pueda ayudar al crecimiento del equipo y crear un ambiente de trabajo agradable.
                                Mi objetivo es crecer en una empresa donde pueda fortalecer mis habilidades y adquirir otras nuevas.
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
