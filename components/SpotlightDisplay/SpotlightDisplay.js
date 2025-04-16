import { ArtWorkDisplay } from "../ArtWorkDisplay/ArtWorkDisplay";
import { useEffect } from "react";
import { useState } from "react";

export function SpotlightDisplay(){
    const [SpotlightWork, setsSpotlightWork] = 
    useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
            async function fetchData() {
                try {
                    const response = await fetch("https://example-apis.vercel.app/api/art");
                    const data = await response.json();
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setsSpotlightWork(data[randomIndex]);
                    setIsLoading(false);
                  } catch (err) {
                    setError(err);
                    setIsLoading(false);
                  }
                }
                fetchData();
              }, []);
    
    return (
        <ArtWorkDisplay work={SpotlightWork} />
);  
}