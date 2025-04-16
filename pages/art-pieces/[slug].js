import {
    Card,
    Image,
    Name,
    Artist,
    Year,
    Genre,
} from "../../components/Styles/styles";

import { ArtWorkDisplay } from "@/components/ArtWorkDisplay/ArtWorkDisplay";

export default function slugtime() {
    const details = ArtWorkDisplay()
        return (
            <>
                {details}
            </>
        )
}



/*export default function ArtWorkDisplay({work}) {
     
    return (
        <Card>
            <Image src={work.imageSource} alt="Not Found" />
            <Name>{work.name}</Name>
            <Artist>{work.artist}</Artist>
            <Year>{work.year}</Year>
            <Genre>{work.genre}</Genre>
            <button>Back</button>
        </Card>
    );
}*/
