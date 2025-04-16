/* needs to link to gallery page (art-pieces)

use link from Next.js

need to look into how to style a pre-style next/link component
*/

import { Title } from "@/components/Styles/styles";
import { SpotlightDisplay } from "@/components/SpotlightDisplay/SpotlightDisplay";

export default function HomePage() {
  return (
    <div>
      <Title>Art Gallery</Title>
      <SpotlightDisplay />
    </div>
  );
}
