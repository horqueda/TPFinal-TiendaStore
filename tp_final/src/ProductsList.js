import './ProductsList.css'
import { CardGroup, Card } from 'react-bootstrap'
import { getProductos } from "./Data";
import { useParams } from 'react-router-dom';

function ProductsList(){
    let params = useParams();
    let productos = getProductos(parseInt(params.catId, 10));    
    return(
        <CardGroup>
            {productos
                .map((element) => (
                        <Card style={{ width: "500px", height: "250px" }}>Producto:{element.id} foto:<Card.Img variant="top" src={element.image} /> </Card>
                    ))}
        </CardGroup>
        )
    }
export default ProductsList


























/*import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import './ProductsList.css'

function ProductsList(props){
    const [productos, setProductos] = useState()
    const {category} = useParams()
    useEffect(function(){
        fetch
        setProductos([])
    },[category])
    return(
        <Container>
            <ListGroup>
            <ProductDetail id='1'></ProductDetail>
            <ProductDetail id={props.id}></ProductDetail>
            <ProductDetail id={props.id}></ProductDetail>
            <ProductDetail id={props.id}></ProductDetail>
            </ListGroup>
        </Container>
    )
}
export default ProductsList*/