/* 

Needs to be exported for ArtWorkList to use

Use styled-components to write CSS-in-JS
*/

import Link from 'next/link';

import {
    Card,
    Image,
    Name,
    Artist,
} from "../Styles/styles"


export function ArtWorkDisplay({ work }) {
    return (
        <Link href={`/art-pieces/${work.slug}`} passHref>
            <Card>
                <Image src={work.imageSource} alt="Not Found" />
                <Name>{work.name}</Name>
                <Artist>{work.artist}</Artist>
            </Card>
        </Link>
    );
}