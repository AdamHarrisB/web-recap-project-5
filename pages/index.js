/* needs to link to gallery page (art-pieces)

use link from Next.js

*/

import Link from "next/link"
import { SpotlightDisplay } from "@/components/SpotlightDisplay/SpotlightDisplay";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <SpotlightDisplay />
      <footer>
        <Link href="art-pieces">Art Pieces</Link>
        <Link href="favourites">Favourites</Link>
      </footer>
    </div>
  );
}
