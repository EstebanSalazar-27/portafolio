import React, { useState } from 'react'
import { withNamespaces } from 'react-i18next'
import styled from 'styled-components'



const MyFieldSelect = styled.select`
    padding: .2rem .5rem;
    border-radius: 1px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #168dc4;
    width: 120px;
    transition: all 300ms ease ;
    border:1.8px solid  #168dc4;
  
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

