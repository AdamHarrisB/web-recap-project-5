import Link from "next/link"
import styled from "styled-components";

/* 
Need to use useRouter hook to avoid navbar reloading? - Solved by moving to _app.js
import { useRouter } from 'next/navigation'
*/


const StyledLink = styled(Link)`
  color: white;
  padding: 100px;
  text-decoration: none;
`;

const StyledFooter = styled.footer `
    display: flex;
    position: sticky;
    margin-bottom: 0;
    align-items: center;
    width: 100%;
    background-color: black;
`;

export function NavigationBar () {
    return(
        <StyledFooter>
        <StyledLink href="/">Spotlight</StyledLink>
        <StyledLink href="art-pieces">Gallery</StyledLink>
        <StyledLink href="favourites">Favourites</StyledLink>
      </StyledFooter>
    )
}