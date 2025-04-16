/* 
A function that fetches information for the API https://example-apis.vercel.app/api/art

Needs the react hook useEffect to synchronise with an external system 

Needs display component to return html (ArtWorkDisplay)

Need useState hook to add state variable

*/

import { useEffect } from "react";
import { useState } from "react";

import { ArtWorkDisplay } from "../ArtWorkDisplay/ArtWorkDisplay";

export default function ArtWorkList() {
const [artWork, setArtWork] = useState([]);
const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {

            }
            fetchData();
          }, []);

return (
    <>
      {artWork.map((work) => (
        <ArtWorkDisplay key={work.slug} work={work} />
      ))}
    </>
  );



}