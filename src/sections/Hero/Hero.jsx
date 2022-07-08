import React from 'react'
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import styled from 'styled-components'
import i18next from 'i18next';

//  Styled Components 

import { Button } from '../../components/Button/Button'

const MyHeader = styled.header`
    width: 100%;
    height: 99.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    min-width: 200px;
    @media (max-width:768px) {
       align-items: center;
    }  
`
export const MyHero = styled.h1`
    
    color: ${({ theme }) => theme.primaryHeaders};
    font-size: 3.5rem;
    font-weight: 700;
    white-space: pre-wrap;
    .text-main{
    background-image: linear-gradient(135deg,#00b4db,#0083b0);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    }
  
    @media (max-width:768px) {
        font-size: 2.2rem;
        text-align: center;
    }
`
const TextDecorated = styled.span`
         
    background-image: linear-gradient(135deg,#00b4db,#0083b0);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  
    `

const Hero = (props) => {
    const { t } = props



    return (
        <MyHeader >
            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
                style={{ width: "100%", maxWidth: "860px" }}
            >


                <MyHero>{t("log.hero1")} <TextDecorated className='name-decorated'>{t("log.name")}</TextDecorated> {t("log.hero2")}</MyHero>
            </div>


            <div data-aos="fade-right" data-aos-once="true" data-aos-duration="800" data-aos-delay="1200">
                <Button
                    url="#about"
                    size="lg"
                    colorLetters="linear-gradient(135deg,#ffffff,#ffffff)"
                    hoverBg="linear-gradient(135deg,#00b4db,#0083b0)"
                    bgColorBefore="linear-gradient(135deg,#00b4db,#0083b0)"
                    bgColor="linear-gradient(135deg,#00b4db,#0083b0)"
                >
                    {t("log.show_more")}
                </Button>

            </div>
        </MyHeader>
    )
}

export const HeroWrapped = withNamespaces()(Hero)