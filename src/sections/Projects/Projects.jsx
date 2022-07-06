
import React, { useEffect } from 'react'
import { withNamespaces } from 'react-i18next'
import styled from 'styled-components'
import { Header } from '../../components/Header/Header'
import { ProjectCard, ProjectCardWrapped } from '../../components/ProjectCard/ProjectCard'
import { useProjectData } from '../../hooks/useProjectData'




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

export const Projects = (props) => {

  const [projectData] = [useProjectData()]
  console.log(projectData)




  return (
    <MySectionProjects>
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-once="true"
        className='cont-header'
      >
        <Header></Header>
      </div>

      <ProjectCards>
        {projectData.map(({ name, description, technologies, url, image, sourceUrl }) => <ProjectCardWrapped key={name} sourceUrl={sourceUrl} name={name} image={image} description={description} technologies={technologies} url={url} />)}
      </ProjectCards>
    </MySectionProjects>
  )
}

export const ProjectsWrapped = withNamespaces()(Projects)
