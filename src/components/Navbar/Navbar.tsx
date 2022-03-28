import styled from "styled-components";
import Dropdown from "./Dropdown/Dropdown";
import Logo from "./Logo";

const Navbar = () => {
  return(
      <NavbarContainer>
          <NavbarItems>
              {/*TODO: May need to do something about the i in "reddit" */}
              <Logo text="reddit"/> 
              <Dropdown label="Home"/>
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
   height: 52px;
   background-color: #1a1a1b;
   color: white;
   isolation: isolate;
`;

// ul might not be good here
const NavbarItems = styled.ul`
   display: flex;
   align-items: baseline;
`


export default Navbar;