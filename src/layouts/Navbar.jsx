import "./css/Navbar.css";
import { FaCartShopping } from "react-icons/fa6";


export const Navbar = () => {

    return (
        <nav>
            <img src="/1.png" alt="" />
            <ul>
                <li>Inicio</li>
                <li>Calefaccion</li>
                <li>Aire Acondicionado</li>
                <li>Construccion</li>
                <li>About Us</li>
                <li>Contacto</li>
            </ul>


            <FaCartShopping color="white" size={"30px"} className="carrito"/>

        </nav>
    )
}