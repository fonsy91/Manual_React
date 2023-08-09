import '../estilos/NavBar.css';
import Code from '../prism/Code';
import '../prism.css';

export const ColoresBoots = () => {
    return(
        <>
            <h1>MANUAL BOOTSTRAP 5</h1>
            <br /><br />
            <h4>BORDES Y COLORES</h4>
            <ul>
                <li><b>Colores:</b> primary(azul), secondary(gris), success(verde), danger(rojo), warning(amarillo),
                    info(turquesa), light(blanco gris), dark(negro 80%), white(blanco), transparent, white-50(blanco 50%),
                    black-50(negro 50%), muted(gris claro), body(negro 100%). Despues hay que indicarle si ese color va a 
                    ser color de fondo, color o color de borde.
                </li>
                <li><b>Colores de fondo:</b> [bg-color]</li>
                <li><b>Colores de fondo con Opacidad y Gradiente v5.0.1:</b> [bg-gradient] o [bg-opacitity-valor] valor=10,25,50,75</li>
                <li><b>Colores de texto:</b> [text-color]</li>
                <li><b>Estilos:</b> :hover y :focus: link[color] = textos que actuan como hipervinculos etiquetas (a) y 
                text-opacity-valor</li>
                <li><b>Bordes:</b> [border o border-lado] lado=top, right, bottom, left. Si quieres poner un color al borde: [border-color]
                    eliminar bordes [border-0 o border-lado]. Bordes redondeados: rounded, rounded-circle, rounded-pill, [rounded-lado]
                    lado=top, end, bottom, start. Tamaño de bordes redondeados: 
                </li>
            </ul>
        </>
    );
}