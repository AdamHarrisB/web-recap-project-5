/* needs to link to gallery page (art-pieces)

use link from Next.js

need to look into how to style a pre-style next/link component
*/

import Link from "next/link"
import { SpotlightDisplay } from "@/components/SpotlightDisplay/SpotlightDisplay";
import { NavigationBar } from "@/components/NavigationBar/NavigationBar";

export default function HomePage() {
  return (
    <div>
      <h1>Art Gallery</h1>
      <SpotlightDisplay />
      <NavigationBar />
    </div>
  );
}
