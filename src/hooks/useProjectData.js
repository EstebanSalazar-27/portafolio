import { useEffect, useState } from "react"



// Projects Images 
import i18n from '../config/i18n'
import calculadora from "../images/calculator.png"
import giphy from "../images/giphy.png"
import form from "../images/form.png"
import pokedex from "../images/pokedex.png"
const projectsData = [
    {
        name: "Pokedex",
        description: "pokedex_description",
        technologies: "ReactJs || SASS || Rest Apis || Git - Github",
        url: "https://estebansalazar-27.github.io/Pokedex---Pokemons-3D---React-js-/",
        sourceUrl: "https://github.com/EstebanSalazar-27/Pokedex---Pokemons-3D---React-js-",
        image: pokedex
    },
    {
        name: "giphy",
        description: "giphy_description",
        technologies: "ReactJs || SASS || Styled Components || Wouter || Rest Apis || Git - Github",
        url: "https://gifs-plataform-enis.herokuapp.com/",
        sourceUrl: "https://github.com/EstebanSalazar-27/Gift-app---React",
        image: giphy
    },
    {
        name: "Calculator",
        description: "calculator_description",
        technologies: "ReactJs || Styled Components || Theme Provider || Git - Github",
        url: "https://calculator-react-enis.herokuapp.com/",
        sourceUrl: "https://github.com/EstebanSalazar-27/Calculator_React",
        image: calculadora
    },

    {
        name: "Google Form",
        description: "google_description",
        technologies: "ReactJs || Formik (Forms Manager) || Yup (Forms Validador) || Styled Components || Git - Github",
        url: "https://formik-form-enis.herokuapp.com/",
        sourceUrl: "https://github.com/EstebanSalazar-27/GoogleForm",
        image: form
    },

]
export const useProjectData = () => {
    const [projectData, setProjectData] = useState(projectsData)

    return projectData
}