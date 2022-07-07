import './NavBar.css'
import  {Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
      <Container>
        <Navbar bg="dark" variant="dark">
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/1">Remeras</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/2">Chombas</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/catId:3">Camisas</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/catId:4">Otros</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/">HOME</Link>
      </Navbar>
      </Container>
    )
}

export default NavBar