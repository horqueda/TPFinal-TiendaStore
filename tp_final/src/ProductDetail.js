import './ProductDetail.css'

function ProductDetail(props){
    return(
        <>
            <p>Hola soy un producto de la categoria {props.id}</p>
            <img alt='' src='../assets/React.jpg' />
        </>
    )
}

export default ProductDetail