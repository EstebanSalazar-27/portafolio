

import styled from 'styled-components'

const dimensionBtn = {
    sm: {
        height: "50px",
        width: "60px",
        fontSize: ".8rem"
    },
    md: {
        height: "40px",
        width: "120px",
        fontSize: "1rem"
    },
    lg: {
        height: "130px",
        width: "150px",
        fontSize: "1.5rem"
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
    user-select: none;
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
const MyUncle = styled.a`
    padding:.2rem .5rem;
    text-align: center;
    line-height:30px;
    text-transform: capitalize;
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
    user-select: none;
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
export const Button = ({ type, children, bgColor, colorLetters, bgColorBefore, borderColor, url, size = "md" }) => {
    return (
        <>
            {
                url
                    ?
                    <MyUncle href={url} colorLetters={colorLetters} borderColor={borderColor} bgColor={bgColor} bgColorBefore={bgColorBefore} size={size}>{children}</MyUncle>
                    :
                    <Mybutton colorLetters={colorLetters} borderColor={borderColor} bgColor={bgColor} bgColorBefore={bgColorBefore} size={size}>
                        {children}
                    </Mybutton>
            }
        </>


    )
}
