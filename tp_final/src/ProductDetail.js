import './ProductDetail.css'
import remera1  from "../assets/remera1.jpg";
import remera2  from "../assets/remera2.jpg";
import remera3  from "../assets/remera3.jpg";
import {Link} from 'react-router-dom'
import Carrito from "../paginas/Carrito";



function ProductDetailRemeras(props){
    return(
        <>
            <dir>
            <p>remeras {1}</p>
            <img alt='' src={remera1} width={180} height ={200} />
            <p>Para Fanaticos de React</p>
            <Link className="btn btn-primary" to={<Carrito/>} role="button">comprar</Link>
            </dir>
        
            <dir>
            <p>Camisas{2}</p>
            <img alt='' src={remera2} width={180} height ={200} />
            <p>Para fanaticos de Angular</p>
            <div className='boton'><Link to= {Carrito} class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">comprar</Link></div>
            </dir>

            <dir>
            <p>Chombas {3}</p>
            <img alt='' src={remera3} width={180} height ={200} />
            <p>Para fanaticos de JS</p>
            <div className='boton'><Link to= {Carrito} class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">comprar</Link></div>
            </dir>
        </>
    )
}

export default ProductDetailTenisStore

