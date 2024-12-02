import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const MytestDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: aliceblue;
`;
const Tap = styled.div`
    display: block;
    width: 100px;
    background-color: aqua;
`;
const Mytest = () => {
    let [status, setStatus] = useState(true)
    let [fade, setFade] = useState('')

    // useEffect(() => {
    //     if (status) setFade('end')
    //     else setFade('')
    // }, [])

    const handleClick = (() => {

        setStatus(!status)
        if (status) {
            setFade('end')
        }
        else {
            setFade('')
        }

    });


    return (
        <div>
            <MytestDiv id="Mytest" className={'container start ' + fade}>
                Mytest
            </MytestDiv>
            <Tap onClick={() => handleClick()}>Click!</Tap>
        </div>

    )
}
export default Mytest;