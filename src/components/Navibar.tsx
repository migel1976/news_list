import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Style = styled.div`
  a.nav-link {
    color: #0f0;
    &:hover {
      color: #f00;
    }
  }
`;
const Navibar: React.FC = () => {
  return (
    <>
      <Style>
        <Navbar bg="dark" variant="dark">
          <NavbarBrand>
            <Nav.Link as={Link} to="/">
              Новости из мира IT
            </Nav.Link>
          </NavbarBrand>
          <Nav className="mr-auto"></Nav>
        </Navbar>
      </Style>
    </>
  );
};
export default Navibar;
