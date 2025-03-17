import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, MessageSquare } from "lucide-react"; // WhatsApp reemplazado
import "../styles/Botton.css"; // Estilos

export default function Botton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="botton-container">
            {/* Botón principal */}
            <motion.button
                className="botton-main"
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
            >
                <MessageCircle size={24} />
            </motion.button>

            {/* Botones secundarios */}
            {open && (
                <div className="botton-options">
                    <motion.a
                        href="https://wa.me/542215317014"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botton-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MessageSquare size={20} /> WhatsApp
                    </motion.a>

                    <motion.a
                        href="https://instagram.com/lavaderoygomeria231"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botton-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Instagram size={20} /> Instagram
                    </motion.a>
                </div>
            )}
        </div>
    );
}
