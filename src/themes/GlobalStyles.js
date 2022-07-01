import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html{
    background-color: ${({theme}) => theme.bodyBg};
}
body{
    background-color: ${({ theme }) => theme.bodyBg || "#000"};
    transition: background 200ms ease;
   
    overflow-y: auto;
    overflow-x: hidden;
}
p{
    color: ${({ theme }) => theme.text};
}
`