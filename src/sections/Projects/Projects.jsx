
import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header/Header'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import getProjectsData from './projectsData'



const MySectionProjects = styled.section`
  margin-bottom: 3rem;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .cont-header{
    text-align: center;
  }
`
const ProjectCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Projects = () => {

  const projectsData = getProjectsData()

  return (
    <MySectionProjects>
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        data-aos-delay="100"
        className='cont-header'
      >
        <Header>Projects</Header>
      </div>

      <ProjectCards>
        {projectsData.map(({ name, description, technologies, url, image, sourceUrl }) => <ProjectCard key={name} sourceUrl={sourceUrl} name={name} image={image} description={description} technologies={technologies} url={url} />)}
      </ProjectCards>
    </MySectionProjects>
  )
}
