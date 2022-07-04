import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


body{
    background-color: ${({ theme }) => theme.bodyBg || "#000"};
    transition: background 200ms ease;
  
}
p{
    color: ${({ theme }) => theme.text};
}
`