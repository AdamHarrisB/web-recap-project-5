import Image from "next/image";
import { useRouter } from "next/router.js";
import { useState, useEffect } from "react";
import { Card } from "@/components/Styles/styles";



export default function ArtWorkDetail() {
  const router = useRouter();

  const { slug } = router.query;
  const [artWorks, setArtWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleBackClick = () => {
    router.back();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json();
        setArtWorks(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  const work = artWorks.find((work) => work.slug === slug);
  const { name, artist, year, genre, imageSource} = work;

  return (
    <>
        <Card>
            <h1>{name}</h1>
            <h2>{artist}</h2>
            <h3>{year}</h3>
            <h3>{genre}</h3>
            <img alt="Error" src={imageSource} width={300}/>
            <button onClick={handleBackClick}>Back</button>
        </Card>


    </>
  );
}

/*export default function slugtime() {
    const work = ArtWorkDisplay()
        return (
            <>
                {work}
            </>
        )
}*/



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
