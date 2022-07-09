import React from 'react'
import styled from 'styled-components'
import github from "../../images/footer/github.png"
import linkedin from "../../images/footer/linkedin.png"
const MyFooter = styled.footer`
    background-color: rgb(38,38,38);
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
     picture{
        cursor: pointer;
        transition: 300ms ease;
        &:hover{
            transform: translateY(-5px);
            
        }
        
      
    }
 
    hr{
        margin-top: 1rem;
        margin-bottom: .5rem;
        border: .5px solid #38383b;
        width: 40%;
    }
    cite{
        font-size: .8rem;
        color: #ccc;

        a{
            color: #ccc;
            transition: 300ms ease;
            &:hover{
                color: #2ca4ef;
            }
        }
    }
`
const IconsCont = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
`
export const Footer = () => {
    return (
        <MyFooter>
            <IconsCont>
                <picture>
                    <a target="_blank" href="https://github.com/EstebanSalazar-27">
                        <img height={38} src={github} alt="" />
                    </a>

                </picture>

                <picture>
                    <a target="_blank" href="https://www.linkedin.com/in/esteban-salazar-8919231ab/" >
                        <img height={32} src={linkedin} alt="" />
                    </a>
                </picture>


            </IconsCont>
            <hr />
            <cite>© 2022 - Template developed by <a target="_blank" href="https://github.com/EstebanSalazar-27">Esteban Salazar</a></cite>
        </MyFooter>
    )
}
