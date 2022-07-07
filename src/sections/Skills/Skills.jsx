import React from 'react'
import styled from 'styled-components'
import "./skills.scss"

import { withNamespaces } from 'react-i18next';
import { Header } from '../../components/Header/Header'

import reactLogo from "../../images/skills/react.png"
import jsLogo from "../../images/skills/js.png"
import gitLogo from "../../images/skills/git-logo.png"
import githubLogo from "../../images/skills/githubLogo.png"

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
                <MyLineDecorated />
            </div>

            <div className='cont-skills'>

                <div className="achievement-box" data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <div className="achievement-box-icon">
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>ReactJs</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-25">
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
                            <div className="achievement-box-status-50">
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
                        <span className='css-logo'>CSS</span>
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>CSS</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-75">
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
                        <span className='sass-logo'>SASS</span>
                    </div>
                    <div className="achievement-box-namebar-area">
                        <span>SASS</span>
                        <div className="achievement-box-bar">
                            <div className="achievement-box-status-100">
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
                            <div className="achievement-box-status-50 git-status">
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
                            <div className="achievement-box-status-50 github-status">
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
