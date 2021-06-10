import { useState } from "react";

export const Circulo = () => {

    const [estado, setEstado] = useState(false);
    const cambioEstado = () => {
        if (estado === (true)) {
            const setEstado = false;
            return setEstado;
        } else if (estado === (false)) {
            const setEstado = true;
            return setEstado;
        };

    };
    return (
        <div className="circulo" onClick={cambioEstado}></div>
    );

}