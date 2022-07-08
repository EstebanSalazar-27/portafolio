import React from 'react'
import styled from 'styled-components'
import "./skills.scss"

import { withNamespaces } from 'react-i18next';
import { Header } from '../../components/Header/Header'

// Icons 
import reactLogo from "../../images/skills/react.png"
import jsLogo from "../../images/skills/js.png"
import gitLogo from "../../images/skills/git-logo.png"
import githubLogo from "../../images/skills/githubLogo.png"
import materialLogo from "../../images/skills/material.png"
import styledLogo from "../../images/skills/styledComponents.png"
import i18nextLogo from "../../images/skills/i18next.png"
import sassLogo from "../../images/skills/sass.png"
import cssLogo from "../../images/skills/css-3.png"
export const SkillsHeader = styled.h3`
    color: ${({ theme }) => theme.constrastHeaders};
    font-weight: 400;
    font-size: 1.3rem;
    
`
const MySkillsCont = styled.div`
    padding: 1.5rem 1rem;
    margin-bottom: 4rem;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`
const MyLineDecorated = styled.hr`
  border: 1px solid #2d96ff;
  width: 100%;
  margin-top: .3rem;
`
export const Skills = (props) => {
    const { t } = props

    return (
        <MySkillsCont>
            <div data-aos="fade-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
            >
                <Header >
                    {t("skills.header")}
                </Header>

            </div>

            <div className='cont-skills'>

                <div className="achievement-box" data-aos="fade-up "
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    <div className="achievement-box-icon" >
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>ReactJs</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-25" data-aos="skill-progress-50" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="achievement-box" data-aos="fade-up "
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    <div className="achievement-box-icon">
                        <img src={materialLogo} alt="" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>Material IU</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-50 material-status" data-aos="skill-progress-50" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="achievement-box" data-aos="fade-up "
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    <div className="achievement-box-icon">
                        <img src={styledLogo} alt="" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>Styled Components</span>

                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-75 styled-status" data-aos="skill-progress-50" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>


                <div className="achievement-box" data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <div className="achievement-box-icon">
                        <img src={jsLogo} alt="" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>JavaScript</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-50" data-aos="skill-progress-50" data-aos-easing="new-easing" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="achievement-box" data-aos="fade-up "
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    <div className="achievement-box-icon" >
                        <img src={i18nextLogo} alt="" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>I18next (Internationalization)</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-25 i18next-status" data-aos="skill-progress-50" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="achievement-box" data-aos="fade-up "
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <div className="achievement-box-icon">
                        <img src={cssLogo} alt="" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>CSS</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-75" data-aos="skill-progress-75" data-aos-easing="new-easing" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="achievement-box" data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <div className="achievement-box-icon">
                        <img src={sassLogo} width={70} alt="gitLogo" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>SASS</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-100 sass-status" data-aos="skill-progress-100" data-aos-easing="new-easing" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="achievement-box" data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <div className="achievement-box-icon">
                        <img src={gitLogo} alt="gitLogo" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>Git</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-50 git-status" data-aos="skill-progress-25" data-aos-easing="new-easing" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="achievement-box " data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true">

                    <div className="achievement-box-icon">
                        <img src={githubLogo} alt="githubLogo" />
                    </div>

                    <div className="achievement-box-namebar-area">
                        <span>Github</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-50 github-status" data-aos="skill-progress-50" data-aos-easing="new-easing" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </MySkillsCont>
    )
}

const SkillsWrapped = withNamespaces()(Skills)

export default SkillsWrapped

