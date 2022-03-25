import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  return(
      <NavbarContainer>
          <NavbarItems>
              <Logo text="reddit"/>
          </NavbarItems>
      </NavbarContainer>
  )
};

const NavbarContainer = styled.nav`
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: fixed;
   width: 100%;
   height: 50px;
   background-color: #1a1a1b;
   color: white;
`;

const NavbarItems = styled.ul`
   display: flex;
   align-items: baseline;
`


export default Navbar;