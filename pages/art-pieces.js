import ArtWorkList from "@/components/ArtWorkList/ArtWorkList";
import { NavigationBar } from "@/components/NavigationBar/NavigationBar";

export default function ArtPiecesPage() {
    return (
        <>
            <h1>Art Gallery</h1>
            <h2>Art Pieces</h2>
            <ArtWorkList/>
            <NavigationBar/>
        </>
    );
}