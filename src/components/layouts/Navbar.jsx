import "./css/Navbar.css";
import { CartWidget } from "../common/CartWidget";


export const Navbar = () => {

    return (
        <header>
            <nav>
                <img src="/1.png" alt="" />
            
                <ul>
                    <li>Inicio</li>
                    <li>Calefaccion</li>
                    <li>Aire Acondicionado</li>
                    <li>About Us</li>
                    <li>Contacto</li>
                </ul>
            
                <CartWidget/>
            </nav>
        </header>

    )
}