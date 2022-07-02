import React from 'react'
import { Helmet } from "react-helmet"

export const MetaDatos = () => {
    return (
        <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created by using create-react-app and this is my professional portfolio" />
            <meta http-equiv='cache-control' content='no-cache' />
            <meta http-equiv='expires' content='0' />
            <meta http-equiv='pragma' content='no-cache' />
        </Helmet>
    )
}
