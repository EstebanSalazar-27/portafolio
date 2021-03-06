import React, { useHook } from 'react'

// Projects Images 
import i18n from '../../config/i18n'
import calculadora from "../../images/calculator.png"
import giphy from "../../images/giphy.png"
import form from "../../images/form.png"
import pokedex from "../../images/pokedex.png"


//  Translations 



const projectsData = [
    {
        name: "Pokedex",
        description: i18n.t("projects.pokedex_description"),
        technologies: "ReactJs || SASS || Rest Apis || Git - Github",
        url: "https://estebansalazar-27.github.io/Pokedex---Pokemons-3D---React-js-/",
        sourceUrl: "https://github.com/EstebanSalazar-27/Pokedex---Pokemons-3D---React-js-",
        image: pokedex
    },
    {
        name: "Giphy",
        description: i18n.t("projects.giphy_description"),
        technologies: "ReactJs || SASS || Styled Components || Wouter || Rest Apis || Git - Github",
        url: "https://gifs-plataform-enis.herokuapp.com/",
        sourceUrl: "https://github.com/EstebanSalazar-27/Gift-app---React",
        image: giphy
    },
    {
        name: "Calculator",
        description: "  ",
        technologies: "ReactJs || Styled Components || Theme Provider || Git - Github",
        url: "https://calculator-react-enis.herokuapp.com/",
        sourceUrl: "https://github.com/EstebanSalazar-27/Calculator_React",
        image: calculadora
    },

    {
        name: "Google Form",
        description: "Este Formulario fue creado tomando como inspiracion un formulario de Google, en donde tenemos varios fields con sus respectivas validaciones y un success animation al momento de enviar el formulario. ",
        technologies: "ReactJs || Formik (Forms Manager) || Yup (Forms Validador) || Styled Components || Git - Github",
        url: "https://formik-form-enis.herokuapp.com/",
        sourceUrl: "https://github.com/EstebanSalazar-27/GoogleForm",
        image: form
    },

]
console.log(projectsData)

export default function getProjectsData() {
    return projectsData
}

