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
          <NavbarBrand>Новости из мира IT</NavbarBrand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Главная
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/news">
            Новость
          </Nav.Link> */}
          </Nav>
        </Navbar>
      </Style>
    </>
  );
};
export default Navibar;
