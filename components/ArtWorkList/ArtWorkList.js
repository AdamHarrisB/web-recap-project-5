/* 
A function that fetches information for the API https://example-apis.vercel.app/api/art

Needs the react hook useEffect to synchronise with an external system 

Needs display component to return html (ArtWorkDisplay)

*/

import { useEffect } from "react";

import { ArtWorkDisplay } from "../ArtWorkDisplay/ArtWorkDisplay";

export default function ArtWorkList() {

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://example-apis.vercel.app/api/art");
                const json = await response.json();

            }
        }

    }

)
return (
    <Fragment>
      {artWork.map((work) => (
        <ArtWorkDisplay key={work.slug} work={work} />
      ))}
    </Fragment>
  );



}