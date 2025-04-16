import {
    Card,
    Image,
    Name,
    Artist
} from "/Styles/styles.js";

export function SpotlightDisplay(){
    return (
        <Card>
        <Image src={work.imageSource} alt="Not Found" />
        <Name>{work.name}</Name>
        <Artist>{work.artist}</Artist>
    </Card>
);  
}