/* needs to link to gallery page (art-pieces)

use link from Next.js

*/

import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <footer>
        <Link href="art-pieces">Art Pieces</Link>
        <Link href="favourites">Favourites</Link>
      </footer>
    </div>
  );
}
