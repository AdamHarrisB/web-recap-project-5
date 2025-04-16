/*
Refactored from ArtWorkDisplay for ease of use elsewhere and neatness
*/

import styled from "styled-components"

export const Card = styled.div`
background-color: lightgray;

width: 70%;
`
export const Image = styled.img`
    width: 90%;
    align-self: center;

    &:hover{
        opacity: 80%;
    }

`
export const Name = styled.h2`
    color: black;
    text-align: center;
`
export const Genre = styled.p`
    text-align: center;
`
export const Year = styled.p`
    text-align: center;
`

export const Title = styled.h1`
    text-align: center;
    background-color: black;
    width: 100%;
    color: white;
    padding: 30px;
    margin-bottom: 30px;
    margin-top: 0;
    position: fixed;
    z-index: 1;
`

export const Artist = styled.h3`
    color:rgb(54, 54, 54);
    text-align: center;

`
