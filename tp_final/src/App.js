import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductsList from './ProductsList';
import Producto from './Product';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {    
  return (
    <Container>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Banner></Banner>}/>
          <Route path='/categories/:catId' element={<ProductsList></ProductsList>}/>
          <Route path='/categories/:catId/:productoId' element={<Producto></Producto>}/>
         </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
