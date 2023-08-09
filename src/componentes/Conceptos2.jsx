import Code from '../prism/Code';
import '../prism.css';
import '../estilos/Conceptos2.css';

export const Conceptos2 = () => {

    return(
        <>
            <h1>MANUAL BOOTSTRAP 5</h1>
            <br /><br />
            <h4>CONCEPTOS II</h4>
            <ul>
                <li>
                    <b>Flexbox (Clases del elemento padre): </b> 
                </li>
                <li>
                    <b>Display: </b> significa mostrar, para indicar a un elemento padre que sea flex se usa la clase <b>d-flex</b>, tambien puedes 
                    aplicar un tamaño responsive [d-pantalla-flex]
                </li>
                <li>
                    <b>Flex-direction: </b> nos permite modificar la direccion de flexbox que por defecto es horizontal son: flex-row, 
                    flex-row-reverse, flex-column, flex-column-reverse. Y para pantallas responsive [flex-pantalla-opcion] las opciones son las 
                    siguientes: row, row-reverse, column, column-reverse.
                </li>
                <li>
                    <b>Flex-wrap: </b> nos sirve para indicar si quremos envolver o no todos los elementos en una fila <b>flex-wrap</b> las clases son: 
                    flex-nowrap (valor por defecto), flex-wrap, flex-wrap-reverse. Y para pantallas responsive [flex-pantalla-nowrap-opcion] las opciones
                    son las siguientes: nowrap, wrap, wrap-reverse.
                </li>
                <li>
                    <b>Justify-content: </b> nos srive para centrar los elementos flexibles ne el main axis <b>justify-content</b> las clses son: [justify-content-opcion] las
                    opciones son las siguientes: start (por defecto), end, center, between, around.
                </li>
                
            </ul>
            <br />

            <div className="d-flex flex-row-reverse flex-content bg-dark text-white text-center">
                <div className="flex-item p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item p-2 bg-success">3</div>
                <div className="flex-item p-2 bg-danger">4</div>
            </div>
            <br />
            <div className="d-flex flex-wrap flex-content2 bg-dark text-white text-center">
                <div className="flex-item p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item p-2 bg-success">3</div>
                <div className="flex-item p-2 bg-danger">4</div>
                <div className="flex-item p-2 bg-warning">5</div>
                <div className="flex-item p-2 bg-success">6</div>
                <div className="flex-item p-2 bg-danger">7</div>
            </div>
            <br />
            <div className="d-flex justify-content-center flex-content bg-dark text-white text-center">
                <div className="flex-item p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item p-2 bg-success">3</div>
                <div className="flex-item p-2 bg-danger">4</div>
            </div>
            <br />
            <p>VAMOS POR EL VIDEO 57</p>

        </>
    );
}