/* 

Needs to be exported for ArtWorkList to use

Use styled-components to write CSS-in-JS
*/

import styled from "styled-components"

const Card = styled.div`

`
const Image = styled.img`
    width: 100%;
`
const Name = styled.h2`
    color: black;

`
const Artist = styled.h3`
    color: lightgray;

`

export function ArtWorkDisplay({ work }) {
    return (
        <Card>
            <Image src={work.imageSource} alt="Not Found" />
            <Name>{work.name}</Name>
            <Artist>{work.artist}</Artist>
        </Card>
    );
}