import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    background-color: ${({ theme }) => theme.bodyBg};
    transition: 400ms ease;
}
p{
    color: ${({ theme }) => theme.text};
}
`