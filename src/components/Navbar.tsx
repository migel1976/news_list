import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { StyleNavbar } from '../styles';

const NavBar: React.FC = () => {
  return (
    <>
      <StyleNavbar>
        <Navbar bg="dark" variant="dark" expand="lg">
          <NavbarBrand>Новости из мира IT</NavbarBrand>
          <Nav className="mr-auto"></Nav>
        </Navbar>
      </StyleNavbar>
    </>
  );
};
export default NavBar;
