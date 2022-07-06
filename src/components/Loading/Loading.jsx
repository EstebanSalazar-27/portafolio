import React from 'react'
import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';
import "./loading.scss"

const MyRootLoading = styled.div`
    width: 100%;
    height: 100vh;
    background-color:${({ theme }) => theme.bodyBg};

    h2{
        color: ${({ theme }) => theme.primaryHeaders};
    }
`
export const Loading = () => {
    return (
        <MyRootLoading className='root-loading'>
            <h2>Loading</h2>
            <div className='loading-cont'>
                <PulseLoader size={25} color="#0b98e0" />
            </div>

        </MyRootLoading>
    )
}
