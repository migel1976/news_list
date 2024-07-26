import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyleNavbar } from './Navibar.styles';

const Navibar: React.FC = () => {
  return (
    <>
      <StyleNavbar>
        <Navbar bg="dark" variant="dark" expand="lg">
          <NavbarBrand>
            <Nav.Link as={Link} to="/">
              Новости из мира IT
            </Nav.Link>
          </NavbarBrand>
          <Nav className="mr-auto"></Nav>
        </Navbar>
      </StyleNavbar>
    </>
  );
};
export default Navibar;
