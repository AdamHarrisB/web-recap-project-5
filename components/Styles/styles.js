/*
Refactored from ArtWorkDisplay for ease of use elsewhere and neatness
*/

import styled from "styled-components"

export const Card = styled.div`
background-color: lightgray;
`
export const Image = styled.img`
    width: 100%;

    &:hover{
        opacity: 80%;
    }

`
export const Name = styled.h2`
    color: black;
    text-align: center;
`
export const Genre = styled.p`

`
export const Year = styled.p`

`

export const Artist = styled.h3`
    color:rgb(54, 54, 54);
    text-align: center;

`