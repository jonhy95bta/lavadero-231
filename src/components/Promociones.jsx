import "../styles/Promociones.css";

export default function Promociones() {
    const promos = [
        { tipo: "Oro", descuento: "25%", detalles: "Siguiendonos en IG . Auto : Car-Detail." },
        { tipo: "Plata", descuento: "20%", detalles: "Siguiendonos en IG . Válido por 5 lavados. Abonas 4" },
        { tipo: "Bronce", descuento: "10%", detalles: "Siguiendonos en IG . Válido por 1 lavado." },
    ];

    return (
        <section id="promociones" className="promociones-container">
            <h2>Promociones</h2>
            <div className="promociones-lista">
                {promos.map((promo, index) => (
                    <div key={index} className={`promo-card ${promo.tipo.toLowerCase()}`}>
                        <h3>Tarjeta {promo.tipo} </h3>
                        <p>{promo.descuento} de descuento</p>
                        <span>{promo.detalles}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
