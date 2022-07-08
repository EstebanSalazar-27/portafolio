import React from 'react'
import styled from "styled-components"
const dimensionHeader = {
    sm: {
        fontSize: "1rem"
    },
    md: {
        fontSize: "1.6rem"
    },
    lg: {
        fontSize: "2.5rem"
    },

}
const MyHeader = styled.h2`

 
    font-size:${({ size }) => dimensionHeader[size].fontSize};
    color: ${({ theme, color }) => color || theme.primaryHeaders};
   
   
`
export const Header = ({ children, color, size = "lg" }) => {
    return (
        <MyHeader size={size} color={color}>{children}</MyHeader>
    )
}
