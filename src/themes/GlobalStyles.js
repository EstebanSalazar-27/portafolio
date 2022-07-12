import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


body{
    background-color: ${({ theme }) => theme.bodyBg || "#000"};
    transition: background 200ms ease;
  
}
a,
select,
button {

    &:focus {
        border: none;
        outline: 2px solid ${({ theme }) => theme.outline};
       
    }
}
p{
    color: ${({ theme }) => theme.text};
}
`