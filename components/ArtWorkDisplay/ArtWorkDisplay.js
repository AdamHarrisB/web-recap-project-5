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

export function ArtWorkDisplay() {
    return (
        <Card>
            <Image src= />
            <Name></Name>
            <Artist></Artist>
        </Card>
    );
}