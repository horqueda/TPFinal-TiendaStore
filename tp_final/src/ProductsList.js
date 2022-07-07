import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Carrito from "../paginas/Carrito";
import '../components/ProductsList.css'

function ProductsListremera(props){
    const [productos, setProductos] = useState()
    const {category} = useParams()
    useEffect(function(){
        fetch
        setProductos([])
    },[category])
    return(
        <Container>
            <ListGroup>
            <ProductDetailremeras/>
            </ListGroup>
        </Container>
    )
}
export default ProductsListRemeraStore