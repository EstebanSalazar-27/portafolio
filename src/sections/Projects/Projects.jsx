
import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header/Header'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import calculadora from "../../images/calculator.png"
import giphy from "../../images/giphy.png"
import form from "../../images/form.png"
const projectsData = [
  {
    name: "Calculator",
    description: "En este proyecto desarrolle una calculadora funcional, en donde podemos hacer diferentes tipos de operaciones, y cuenta con dos disenos Dark y Light  ",
    technologies: "ReactJs || Styled Components || Theme Provider || Git - Github",
    url: "https://calculator-react-enis.herokuapp.com/",
    sourceUrl: "https://github.com/EstebanSalazar-27/Calculator_React",
    image: calculadora
  },
  {
    name: "Giphy",
    description: "Este proyecto fue creado tomando como inspiracion  la plataforma de gifs Giphy.",
    technologies: "ReactJs || SASS || Styled Components || Wouter || Rest Apis || Git - Github",
    url: "https://gifs-plataform-enis.herokuapp.com/",
    sourceUrl: "https://github.com/EstebanSalazar-27/Gift-app---React",
    image: giphy
  },
  {
    name: "Google Form",
    description: "Este Formulario fue creado tomando como inspiracion un formulario de Google, en donde tenemos varios fields con sus respectivas validaciones y un success animation al momento de enviar el formulario ",
    technologies: "ReactJs || Formik (Forms Manager) || Yup (Forms Validador) || Styled Components || Git - Github",
    url: "https://formik-form-enis.herokuapp.com/",
    sourceUrl: "https://github.com/EstebanSalazar-27/GoogleForm",
    image: form
  },
]

const MySectionProjects = styled.section`
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
