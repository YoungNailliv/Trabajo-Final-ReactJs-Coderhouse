import { FaShoppingCart } from "react-icons/fa";


export const CartWidget = () => {

    let cuentaCarrito = 1;
    
    return(
        <div className="contenedorCarrito">
            <p> { cuentaCarrito } </p>
            <FaShoppingCart  color="white" size={"30px"} className="carrito"/>
        </div>

    )
};