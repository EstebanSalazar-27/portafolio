import React from 'react'
import styled from 'styled-components'
import { SkillsHeader } from '../../sections/Skills/Skills'
const MySkillsCard = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    gap: .5rem;
    text-align: center;

    @media (max-width: 768px ) {
        flex-basis: 50%;
    }
`



export const SkillsCard = ({ name, logo, adds }) => {
    return (
        <MySkillsCard data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="center-bottom"
            data-aos-ondurationchange="500"
            data-aos-delay="100"
            data-aos-once="true">
            {
                adds !== ""
                    ?
                    <SkillsHeader>
                        {name} || {adds}
                    </SkillsHeader>
                    :
                    <SkillsHeader>
                        {name}
                    </SkillsHeader>
            }
            <div>
                <img src={logo} height={60} alt={`Imagen relacioanada a ${name}`} />
            </div>
        </MySkillsCard>
    )
}
