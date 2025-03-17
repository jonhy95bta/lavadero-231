import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Íconos para el menú
import "../styles/Navbar.css"; // Estilos


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/img/231.png" alt="Lavadero y Gomería" />
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><Link to="inicio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Inicio</Link></li>
                <li><Link to="servicios" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Servicios</Link></li>
                <li><Link to="promociones" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Promociones</Link></li>
                <li><Link to="galeria" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Galería</Link></li>
            </ul>

            {/* Botón de menú hamburguesa */}
            <motion.button
                className="menu-button"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
        </nav>
    );
}

export default Navbar;
