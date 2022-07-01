import React from 'react'
import styled from 'styled-components'
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
export const Hero = () => {
    return (
        <MyHeader >
            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                <MyHero>Hola, soy <span className='text-main'>Esteban Salazar</span>, <br /> Frontend Developer.<br /> Bienvenido a mi Website</MyHero>
            </div>

            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="1200">
                <Button
                    size="lg"
                    colorLetters="linear-gradient(135deg,#ffffff,#ffffff)"
                    hoverBg={`linear-gradient(135deg,#00b4db,#0083b0)`}
                    bgColorBefore="linear-gradient(135deg,#00b4db,#0083b0)"
                    bgColor={"linear-gradient(135deg,#00b4db,#0083b0)"}
                >
                    Show more
                </Button>
            </div>
        </MyHeader>
    )
}
