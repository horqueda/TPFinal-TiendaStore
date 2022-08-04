const REMERAS = [
    {
        id: 1,
        image: "../assets/React.jpg",
    },
    {
        id: 2,
        image: "../assets/Github.jpg",
    },
    {
        id: 3,
        image: "../assets/HTML.jpg",
    },
    {
        id: 4,
        image: "../assets/JS.jpg",
    },
];
const camperas = [
    {
        id: 1,
        imageURL: '',
    },
];
const zapatillas = [
    {
        id: 1,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00180400/00180415.jpg?3.0.137c',
    },
   ];

export function getProductos(category) {
    switch (category) {
        case 1:
            return REMERAS;
        case 2:
            return camperas;
        case 3:
            return zapatillas;
        default:
            break;
    }
  }

export function getProducto(category,id) {
    switch (category) {
        case 1:
            return REMERAS.find(
                (producto) => producto.id === id
            );
        case 2:
            return camperas.find(
                (producto) => producto.id === id
            );
        case 3:
            return zapatillas.find(
                (producto) => producto.id === id
            );
  
        default:
            break;
    }    
}
