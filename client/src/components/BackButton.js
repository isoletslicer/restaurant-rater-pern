import React from 'react'
import { useHistory } from "react-router-dom"
import styled from "styled-components"



const BackButton = styled.button`
    background-color: lightblue;
    width: 75px;
    padding: 0 10px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;

  }`;

const Back = () => {
    const history = useHistory()

    const clickHandler = () => {
        history.push('/')
    }

    return (
        <BackButton onClick={clickHandler}>
            &#8592;
        </BackButton>
    )
}

export default Back
