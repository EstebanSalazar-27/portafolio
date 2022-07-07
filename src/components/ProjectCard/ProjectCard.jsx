
import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { Header } from '../Header/Header'
import "./projectCard.scss"
import { withNamespaces } from 'react-i18next'



const ImageCont = styled.div`
    box-shadow: 0px 10px 20px ${({ theme }) => theme.shadowSections};
`
const CiteTechnologies = styled.cite`
    color: ${({ theme }) => theme.cite};
    font-weight: 400;
    font-family: "Poppins";
`
const BtnCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`
const InfoProject = styled.p`
    color: ${({ theme }) => theme.text};
    font-family: "Poppins";
    font-weight: 400;
    
`
export const HeaderSecundary = styled.h4`
    color: ${({ theme }) => theme.secundaryHeaders};
`

const SourceCodeLink = styled.a`
    background-image: linear-gradient(135deg,#00b4db,#0083b0);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 600;
    transition: 300ms ease-in-out;
    &:hover{
        margin-left: .3rem;
    }
`
export const ProjectCard = ({ name, url, technologies, description, image, sourceUrl, t }) => {
    return (
        <div className='cont-flex'>
            <div className='project-inf'
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true">
                <Header size="md">{name}</Header>
                <div>
                    <InfoProject>
                        {t(`projects.${description}`)}
                    </InfoProject>
                </div>
                <div>
                    <HeaderSecundary>{t("projects.technologies_applied")}</HeaderSecundary>
                    <CiteTechnologies >
                        {technologies}
                    </CiteTechnologies>
                </div>

                <BtnCont>
                    <Button target="_blank" colorLetters="linear-gradient(135deg,#ffffff,#ffffff)" url={url}>Website</Button>
                    <SourceCodeLink target="_blank" href={sourceUrl}>{t("projects.source_code")}</SourceCodeLink>
                </BtnCont>

            </div>

            <div data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                data-aos-delay="800"
                data-aos-once="true">
                <ImageCont className='project__img-cont' >
                    <a
                        target="_blank"
                        href={url}
                    >
                        <img src={image} alt="" height={350} width={"200"} />
                    </a>
                </ImageCont>
            </div>




        </div >
    )
}

export const ProjectCardWrapped = withNamespaces()(ProjectCard)