/* 

Needs to be exported for ArtWorkList to use

Use styled-components to write CSS-in-JS
*/

import styled from "styled-components"

const Card = styled.div`

`
const Image = styled.img`

`
const Name = styled.h2`

`
const Artist = styled.h3`

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