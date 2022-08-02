import './NavBar.css'
import  {Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <Navbar gb="" variant="">
        <Container>
          <Navbar.Brand>
            <Link style={{textDecoration: 'none', color: 'blue'}} to="/">
              <img
                alt="logo"
                src="logo.png"
                width="2000"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            T S
            </Link>
          </Navbar.Brand>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/">HOME</Link>   
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/1">Remeras</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/2">Camperas</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/3">Zapatillas</Link>
        </Container>
      </Navbar>
    )
}
export default NavBar