/*
New function to display the details of an artwork (once clicked on)

Needs to be linked to from art-pieces.js and the ArtWorkList component it uses

import { useRouter } from 'next/router';

export default function ClickToNavigate() {
  const router = useRouter();
  const handleClick = () => {
        router.push(`/product/${productId}`);
  };
  return (
    <div
      onClick={handleClick}
    >
    </div>
  );
}

*/

/*
import {
    Card,
    Image,
    Name,
    Artist,
    Year,
    Genre,
} from "../Styles/styles"


export function ArtWorkDetails({ work }) {

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
        }

        */