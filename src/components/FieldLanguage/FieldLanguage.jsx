import React, { useState } from 'react'
import { withNamespaces } from 'react-i18next'
import styled from 'styled-components'



const MyFieldSelect = styled.select`
    padding: .4em 1.4em .3em .8em;
    width: 120px;
    border-radius: 1px;
    border: none;
    outline: none;
    background-color: transparent;
   
    box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
    color: #168dc4;

    transition: all 300ms ease ;
    border:1.8px solid  #168dc4;
    font-family: "montserrat" ;
    font-weight: 400;

    &:focus{
        outline: none;
    }
   
  
`
export const FieldLanguage = (props) => {
    const [languageSelected, setLanguageSelected] = useState(props.lng)
    const { i18n } = props

    const handleLanguage = (e) => {
        const lang = e.target.value
        setLanguageSelected(lang)
        i18n.changeLanguage(lang)
    }

    return (
        <MyFieldSelect onChange={handleLanguage} defaultValue={languageSelected} >
            <option value="en" >USA (English)</option>
            <option value="es" >SPANISH (Latino America)</option>
        </MyFieldSelect>
    )
}

export const FieldLanguageWrapped = withNamespaces()(FieldLanguage)

