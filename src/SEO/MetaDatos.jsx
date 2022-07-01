import React from 'react'
import Preview from "../images/preview.png"
import { Helmet } from "react-helmet"

export const MetaDatos = () => {
    return (
        <Helmet>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created by using create-react-app and this is my professional portfolio" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <meta http-equiv='cache-control' content='no-cache' />
            <meta http-equiv='expires' content='0' />
            <meta http-equiv='pragma' content='no-cache' />
            <meta property="og:title" content="Portfolio Esteban Salazar Frontend Developer" />
            <meta property="og:url" content="https://estebansalazar-27.github.io/portafolio/" />
            <meta property="og:image" content={Preview} />
            <meta property="og:image:secure_url" content={Preview} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta property="og:image:alt" content="Esteban Salazar Frontend Developer Portfolio" />
            <title>Esteban Salazar Portfolio</title>
        </Helmet>
    )
}
