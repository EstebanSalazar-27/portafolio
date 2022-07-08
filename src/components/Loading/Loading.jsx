
import React from 'react'
import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';
import "./loading.scss"

const MyRootLoading = styled.div`
    background-color: ${({ theme }) => theme.bodyBg};
   
`
export const Loading = () => {
    return (
        <MyRootLoading className='root-loading'>
            <div className='loading-cont'>
                <PulseLoader size={25} color="#0b98e0" />
            </div>

        </MyRootLoading>
    )
}
