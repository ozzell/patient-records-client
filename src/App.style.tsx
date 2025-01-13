import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #006881;
  color: white;
  padding: 1rem;
  grid-area: nav;
`;

export const Content = styled.main`
  grid-area: content;
  padding: 1rem;
`;

export const Footer = styled.footer`
  background-color: #006881;
  color: white;
  padding: 1rem;
  text-align: center;
  grid-area: footer;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "nav"
    "content"
    "footer";
  grid-template-rows: auto 1fr auto;
`;
