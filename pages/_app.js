import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import GlobalStyle from "../styles";

/*
Moved Navigation Bar from individual pages to layout component _app.js
Moved to the top of page so that it's easier to check on
*/

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
