/* 

Needs to be exported for ArtWorkList to use

Use styled-components to write CSS-in-JS
*/

import { useRouter } from 'next/router';

import {
    Card,
    Image,
    Name,
    Artist,
} from "../Styles/styles"

export function ArtWorkDisplay({ work }) {
    return (
        <Card>
            <Image src={work.imageSource} alt="Not Found" />
            <Name>{work.name}</Name>
            <Artist>{work.artist}</Artist>
        </Card>
    );
}