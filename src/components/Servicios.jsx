import "../styles/Servicios.css";

export default function Servicios() {

    const servicios = [
        {
            nombre: "Lavado Standard",
            descripcion: "Incluye limpieza interior y exterior.",
            precios: [
                "Motos $5.000",
                "Auto $10.000",
                "Camioneta $15.000",
                "Camión $50.000",
            ],
        },


        {
            nombre: "Car-Detail",
            descripcion: "Encerado, pulido y abrillantado, Limpieza de tapizado y lavado de chasis",
            precios: [
                "Encerado $15.000",
                "Pulido y abrillantado $100.000",
                "Limpieza de tapizado $50.000",
                "Lavado de chasis $15.000",

                <em>Los precios exhibidos son unicamente para autos, consultar camiones y camionetas</em>
            ],
        },


        {
            nombre: "Gomería",
            descripcion: "Servicios de gomería: parches, neumáticos usados, balanceo y reparación de llantas.",
            precios: [
                "Parches $5.000",
                "Neumáticos usados $ Consultar",
                "Balanceo $ Consultar",
                "Reparación de llantas $ Consultar",
            ],
        },


        {
            nombre: "Auxilio",
            descripcion: "Auxilio de gomería 24/7",
            precios: [
                "Dentro de la ciudad $10.000",
                "Hasta 20 km $20.000",
                "Más de 20 km - Consultar",
            ],
        },

    ];
    return (
        <section id="servicios" className="servicios-container">
            <h2>Nuestros Servicios</h2>
            <div className="servicios-lista">
                {servicios.map((servicio, index) => (
                    <div key={index} className="servicio-card">
                        <h3>{servicio.nombre}</h3>
                        <p>{servicio.descripcion}</p>
                        <ul>
                            {servicio.precios.map((precio, i) => (
                                <li key={i}>{precio}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
