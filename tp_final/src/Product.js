import './Product.css'
import { useParams } from "react-router-dom";
import { getProducto } from "./Data"

function Producto(){
    let params = useParams();
    let producto = getProducto(parseInt(params.catId, 10),parseInt(params.productoId, 10));
    return(
        <main>
            <p>Producto:{producto.id} foto:<img id={'img'+ producto.id} src={producto.image} alt=''></img> </p>
        </main>
    );
}
export default Producto





























/*import './Product.css'
import { useParams } from "react-router-dom";
import { getProducto } from "./data"

function Producto(){
    let params = useParams();
    let producto = getProducto(parseInt(params.catId, 10),parseInt(params.productoId, 10));
    return(
        <main>
            <p>Producto:{producto.id} foto:<img id={'img'+ producto.id} src={producto.imageURL} alt=''></img> </p>
        </main>
    );
}
export default Producto*/