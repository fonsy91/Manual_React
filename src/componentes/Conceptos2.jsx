import Code from '../prism/Code';
import '../prism.css';
import '../estilos/Conceptos2.css';

export const Conceptos2 = () => {

    return(
        <>
            <h1>MANUAL BOOTSTRAP 5</h1>
            <br />
            <h4>CONCEPTOS II (Flexbox)</h4>
            <ul>
                <li>
                    <b>Flexbox (Clases del elemento padre): </b> link de interes: <a href="https://codepen.io/enxaneta/full/adLPwv/" target="_blank">codepen</a>
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
                    opciones son las siguientes: start (por defecto), end, center, between, around. Para responsive [justify-content-pantalla-opcion] las opciones
                    son las mismas que antes y las pantallas: sm, md, lg, xl
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
            <ul>
                <li>
                    <b>Align-items: </b> nos permite alinear los elementos en el cross axis, [align-items-opcion] las opciones son las 
                    siguientes: start, end, center, baseline, stretch (por defecto) significa que los elementos se estiran siempre y cuando
                    no tengan un alto o ancho fijo o tengan el valor de la propiedad align-items en otro valor distinto a stretch. Para 
                    responsive [align-items-pantalla-opcion] las opciones son las mismas que antes y las pantallas: sm, md, lg, xl
                </li>
                <li>
                    <b>Align-content: </b> nos permite alinear los elementos en el cross axis la diferencia con el anterior es que items alinea 
                    los elementos linea por linea y content y content en grupo, [align-content-opcion] las opciones son las siguientes: start, end, center,
                    between, around, stretch.  Para responsive [align-content-pantalla-opcion] las opciones son las mismas que antes y las 
                    pantallas: sm, md, lg, xl
                </li>
            </ul>
            <br />
            <div className="d-flex align-items-start flex-content2 bg-dark text-white text-center">
                <div className="flex-item p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item p-2 bg-success">3</div>
                <div className="flex-item p-2 bg-danger">4</div>
            </div>     
            <br />
            <div className="d-flex flex-wrap align-content-start flex-content2 bg-dark text-white text-center">
                <div className="flex-item p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item p-2 bg-success">3</div>
                <div className="flex-item p-2 bg-danger">4</div>
                <div className="flex-item p-2 bg-warning">5</div>
                <div className="flex-item p-2 bg-success">6</div>
                <div className="flex-item p-2 bg-danger">7</div>
            </div>            
            <br />
            <Code code={HTMLFlex} language="html"/>
            <br />
            <ul>
                <li><b>Flexbox (clases del elemento hijo): </b></li>
                <li>
                    <b>order: </b> su funcion es reordenar los elementos HTML, [order-valor] los valores son: 1,2,3...12. Para 
                    pantallas responsive [order-pantalla-valor] los valores de pantalla son: sm, md, lg, xl.
                </li>
                <li>
                    <b>flex-grow: </b> nos permite hacer que el elemento flex crezca o no. [flex-grow-0] (No crezca) o [flex-grow-1] (Si crezca).
                    Para tamaños responsive: [flex-pantalla-grow-0] p [flex-pantalla-grow-1].
                </li>
                <li>
                    <b>flex-shrink: </b> nos permite indicar si un elemento flex se va a encoger o no. [flex-shrink-0] (No encoga) o [flex-shrink-1] (Si encoga).
                    Para tamaños responsive: [flex-pantalla-shrink-0] p [flex-pantalla-shrink-1].
                </li>
                <li>
                    <b>align-self: </b> nos permite alinear los elementos de forma individual en el cross axis. [align-self-opcion], las opciones 
                    pueden ser: start, end, center, baseline, stretch (valor por defecto). Para pantallas responsive [align-self-pantalla-opcion], 
                    los valores de pantalla son: sm, md, lg, xl.
                </li>
            </ul>
            <br />
            <div className="d-flex flex-content bg-dark text-white text-center">
                <div className="flex-item order-1 p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item p-2 bg-success">3</div>
            </div>     
            <br />
            <div className="d-flex flex-content bg-dark text-white text-center">
                <div className="flex-item flex-grow-0 p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item flex-grow-1 p-2 bg-success">3</div>
            </div>
            <br />
            <div className="d-flex flex-content bg-dark text-white text-center">
                <div className="flex-item flex-shrink-0 p-2 bg-info">1</div>
                <div className="flex-item p-2 bg-warning">2</div>
                <div className="flex-item p-2 bg-success">3</div>
                <div className="flex-item p-2 bg-danger">4</div>
                <div className="flex-item p-2 bg-warning">5</div>
                <div className="flex-item p-2 bg-success">6</div>
                <div className="flex-item p-2 bg-danger">7</div>
                <div className="flex-item flex-shrink-0 p-2 bg-info">8</div>
            </div>
            <br />
            <div className="d-flex flex-content2 bg-dark text-white text-center">
                <div className="flex-item align-self-start p-2 bg-info">1</div>
                <div className="flex-item align-self-center p-2 bg-warning">2</div>
                <div className="flex-item align-self-end p-2 bg-success">3</div>
            </div>
            <br />
            <Code code={HTMLFlex2} language="html"/>
            <br />


        </>
    );
}


// CODIGOS PARA INCRUSTAR EN LA PAGINA -------------------------------------------
const HTMLFlex = 
`<!--Flex-direction-->
<div className="d-flex flex-row-reverse flex-content bg-dark text-white text-center">
    <div className="flex-item p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-success">3</div>
    <div className="flex-item p-2 bg-danger">4</div>
</div>
<br />
<!--Flex-wrap-->
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
<!--Justify-content-->
<div className="d-flex justify-content-center flex-content bg-dark text-white text-center">
    <div className="flex-item p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-success">3</div>
    <div className="flex-item p-2 bg-danger">4</div>
</div>
<br />
<!--Align-items-->
<div className="d-flex align-items-start flex-content2 bg-dark text-white text-center">
    <div className="flex-item p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-success">3</div>
    <div className="flex-item p-2 bg-danger">4</div>
</div>
<!--Align-content-->     
<div className="d-flex flex-wrap align-content-start flex-content2 bg-dark text-white text-center">
    <div className="flex-item p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-success">3</div>
    <div className="flex-item p-2 bg-danger">4</div>
    <div className="flex-item p-2 bg-warning">5</div>
    <div className="flex-item p-2 bg-success">6</div>
    <div className="flex-item p-2 bg-danger">7</div>
</div>            
`;

const HTMLFlex2 = 
` <!--Order-->
<div className="d-flex flex-content bg-dark text-white text-center">
    <div className="flex-item order-1 p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-success">3</div>
</div>     
<br />
<!--Flex-grow-->
<div className="d-flex flex-content bg-dark text-white text-center">
    <div className="flex-item flex-grow-0 p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item flex-grow-1 p-2 bg-success">3</div>
</div>
<br />
<!--Flex-shrink-->
<div className="d-flex flex-content bg-dark text-white text-center">
    <div className="flex-item flex-shrink-0 p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-success">3</div>
    <div className="flex-item p-2 bg-danger">4</div>
    <div className="flex-item p-2 bg-warning">5</div>
    <div className="flex-item p-2 bg-success">6</div>
    <div className="flex-item p-2 bg-danger">7</div>
    <div className="flex-item flex-shrink-0 p-2 bg-info">8</div>
</div>
<br />
<!--Align-self-->
<div className="d-flex flex-content2 bg-dark text-white text-center">
    <div className="flex-item align-self-start p-2 bg-info">1</div>
    <div className="flex-item align-self-center p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-danger">7</div>
</div>            
`;