

import styled, { keyframes } from 'styled-components'

const dimensionBtn = {
    sm: {
        height: "50px",
        width: "60px",
        fontSize: ".8rem"
    },
    md: {
        height: "40px",
        width: "100px",
        fontSize: "1rem"
    },
    lg: {
        height: "50px",
        width: "150px",
        fontSize: "1.250rem"
    }
}

const Mybutton = styled.button`
    padding: .2rem;
    width: ${({ size }) => dimensionBtn[size].width};
    height: ${({ size }) => dimensionBtn[size].height};
    font-size: ${({ size }) => dimensionBtn[size].fontSize};
    font-weight: 600;
    background-image: ${({ bgColor }) => bgColor || "linear-gradient(135deg,#00b4db,#0083b0)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    border-width: 2px;
    border-style: solid;
    -o-border-image: ${({ borderColor }) => borderColor || "linear-gradient(135deg,#00b4db,#0083b0)"};
    border-image:  ${({ borderColor }) => borderColor || "linear-gradient(135deg,#00b4db,#0083b0)"};
    border-image-slice: 1;
    cursor: pointer;
    position: relative;
  
    ::before{
        content: "";
        margin: 0;
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        width: 102%;
        height: 105%;
        background-image: ${({ bgColorBefore }) => bgColorBefore || "linear-gradient(135deg,#00b4db,#0083b0)"};
        transform: scaleX(0);
        transition: 200ms ease;
        transform-origin: left;
    }
    &:hover{
        background-image:${({ colorLetters }) => colorLetters || "linear-gradient(135deg,#00b4db,#0083b0)"}; 
        ::before{
            transform: scaleX(1);
        }
    }

`
export const Button = ({ children, bgColor, colorLetters, bgColorBefore, borderColor, url, size = "md" }) => {
    return (
        <Mybutton colorLetters={colorLetters} borderColor={borderColor} bgColor={bgColor} bgColorBefore={bgColorBefore} size={size}>
            <a target="_blank" href={url}>
                {children}
            </a>
        </Mybutton>
    )
}
