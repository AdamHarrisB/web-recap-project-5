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

// Reused in SpotlightDisplay with math.random to select a single entry.

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://example-apis.vercel.app/api/art");
                const data = await response.json();
                setArtWork(data);        
                setIsLoading(false);        
              } catch (err) {
                setError(err);
                setIsLoading(false);
              }
            }
            fetchData();
          }, []);

  if (isLoading) return <p>Loading...</p>;

return (
    <>
      {artWork.map((work) => (
        <ArtWorkDisplay key={work.slug} work={work} />
      ))}
    </>
  );



}