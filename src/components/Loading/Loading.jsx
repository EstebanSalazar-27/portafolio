import React from 'react'
import { PulseLoader } from 'react-spinners';
import "./loading.scss"
export const Loading = () => {
    return (
        <div className='root-loading'>
            <h2>Loading</h2>
            <div className='loading-cont'>
                <PulseLoader size={25} color="#0b98e0" />
            </div>

        </div>
    )
}
