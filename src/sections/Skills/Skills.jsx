import React from 'react'
import styled from 'styled-components'
import { DecoratedSection } from '../About/About'
import { SkillsCard } from '../../components/SkillsCard/SkillsCard'
import getSkills from './skillsData'
import { Header } from '../../components/Header/Header'


const SkillsCardsCont = styled.section`
    padding: 1rem 1rem;
    width: 80%;
    min-width: 200px;
    min-height: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const SkillsHeader = styled.h3`
    color: ${({ theme }) => theme.constrastHeaders};
    font-weight: 400;
    font-size: 1.3rem;
    
`
const SkillsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .3rem;
`
export const Skills = () => {
    const skills = getSkills()

    return (
        <DecoratedSection minHeight="120vh" clipPath="polygon(0% 8.5%, 100% 0%, 100% 100%, 0% 100%)">
            <div data-aos="fade-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
            >
                <Header color={"#fff"}>
                    Skills
                </Header>
            </div>

            <SkillsCardsCont>
                {skills.map(({ name, logo, adds }) => {
                    return (
                        <SkillsCard key={name} name={name} logo={logo} adds={adds} />
                    )
                })}
            </SkillsCardsCont>


        </DecoratedSection>
    )
}
