import '../estilos/NavBar.css';
import '../estilos/IniBoots.css';
import Code from '../prism/Code';
import '../prism.css';

export const IniBoots = () => {
    return(
        <>
            <h1>MANUAL BOOTSTRAP 5</h1>
            <br /><br />
            <h4>GRID</h4>
            <p>
                Se trata de dividir la plantilla en 12 columnas y cada elemento que exista dentro de plantilla ocupara 
                las columnas que tu desees. Bootstrap incluye seis puntos de ruptura (seis niveles de cuadricula) para
                hacer que nuestras plantillas sean responsive:
            </p>

            <Code code={CodeHTML} language="javascript"/>

            <p>
                Lo primero para usar un Grid es especificar el contenedor que pueden ser con las clases: 
                <a href="https://getbootstrap.com/docs/5.0/layout/containers/" target="_blank"> Medidas Container</a>.
            </p>
            <ul>
                <li>
                    <b>container:</b> centrar el div, p etc en la pantalla y lo tendra centrado incluso reduciendo la pantalla desde
                    despisotivos mas pequeños hasta los mas grandes haciendo uso de los puntos de ruptura de la imagen anterior.
                </li>
                <li>
                    <b>container-tamaño:</b> tambien centra el contenido en un tamaño especifico los tamaños son: container-sm, 
                    container-md, container-lg, container-xl, container-xxl container-fluid se pueden ver las medidas en el link de arriba.
                </li>
                <li>
                    <b>container-fluid:</b> abarcar el 100% del ancho de la pagina en todos los tamaños.
                </li>
            </ul>
            <p>
                Por tanto una vez que has elegido un contenedor lo siguiente que hay que hacer es agregarle filas a ese contenedor
                y dentro de cada fila tendras las 12 columnas de la Grid. Para agregar fila o filas a un elemento se usa la clase row
                y para agregarle columnas..
            </p>
            <ul>
                <li><b>col:</b> lo que hace es dividir las 12 columnas en el numero de columnas que hay dentro de un row</li>
                <li><b>col-auto:</b> el ancho del elemento es igual a su contenido</li>
                <li><b>col-numero:</b> el ancho de columna es igual al numero que le pases</li>
                <li><b>col-tamaño:</b> xs, sm, md, lg, xl, xxl. Es igual que col pero con la diferencia de que le indicas un tamaño (casi no se utiliza)</li>
                <li><b>col-tamaño-auto:</b> Hace lo mismo que col-auto, pero expecificas un tamaño </li>
                <li><b>col-tamaño-numero:</b> Se utiliza mucho</li>
                <li><b>w-100:</b> esta clase nos permite hacer saltos entre columnas</li>
                <li><b>row-cols-numero:</b> definir cuantas columnas quires que abarque cada uno de los elementos que conforman la fial</li>
                <li><b>row-cols-tamaño-numero:</b> igual que el anterior pero incluyes el tamaño del contenedor</li>
                <li><b>row-cols-auto:</b> el ancho de las columnas que estan dentro de la row va a ser igual al contenido que guardan</li>
            </ul>
            <br />
            <div className='container'>
                {/*Dividimos la fila en dos columnas*/}
                <div className="row">
                    <div className="col bg-primary">Columna 1</div>
                    <div className="col bg-success">Columna 2</div>
                </div>
                <div className="row">
                    <div className="col bg-warning">Clase col</div>
                    {/*El ancho ocupa lo mismo que su contenido*/}
                    <div className="col-auto bg-info">Clase col-auto</div>
                    <div className="col bg-warning">Clase col</div>
                </div>
                <div className="row">
                    <div className="col-4 bg-primary">Clase col-4</div>
                    <div className="col-8 bg-success">Clase col-8</div>
                </div>
                <div className="row">
                    {/*Tamaño pequeño 12 col, mediano 6 col y grande 9 col*/}
                    <div className="col-12 col-md-6 col-lg-9 bg-info">col-12 col-md-6 col-lg-9</div>
                    <div className="col-12 col-md-6 col-lg-3 bg-warning">col-12 col-md-6 col-lg-3</div>
                </div>
                <div className="row">
                    <div className="col-4 bg-primary">Columna 1</div>
                    <div className="col-4 bg-success">Columna 2</div>
                    {/*Das saltos entre columnas*/}
                    <div className="w-100"></div>
                    <div className="col-4 bg-primary">Columna 3</div>
                    <div className="col-4 bg-success">Columna 4</div>
                </div>
                {/*Indicas el numero de elementos que hay en cada fila*/}
                <div className="row row-cols-2">
                    <div className="col bg-primary">Columna</div>
                    <div className="col bg-success">Columna</div>
                    <div className="col bg-primary">Columna</div>
                    <div className="col bg-success">Columna</div>
                </div>
            </div>
            <br />
            <Code code={CodeHTMLGrid} language="html"/>
            <br />
            <ul>
                <li>Alineacion: eje-modo-ubicacion</li>
                <li>Eje: main axis -- justify y cross axis -- align </li>
                <li>Modo: cuando quieras alinear en = content -- Group, items -- Linea, self -- Individual</li>
                <li>Ubicacion:</li>
                <ul>
                    <li>Align: start, center y end</li>
                    <li>justify: start, center, end around y between, evenly</li>
                </ul>
                <li>Podemos usar para la alineacion horizontal = justify-content</li>
                <li>Podemos usar para la alineacion vertical = align-items</li>
            </ul>
            <br />

            <div className='container'>
                <div className="row">
                    <h5 className='titulo'>Alineacion de columnas main axis -- justify</h5>
                </div>
                <div className="row justify-content-start fila">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                <div className="row justify-content-center fila">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                <div className="row justify-content-end fila">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                <div className="row justify-content-around fila">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                <div className="row justify-content-between fila">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                <div className="row justify-content-evenly fila">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
            </div>
            <Code code={HTMLAliJustify} language="html"/>

            <div className='container'>
                <div className="row">
                    <h5 className='titulo'>Alineacion de columnas cross axis --align</h5>
                </div>
                <div className="row align-items-start fila2">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                <div className="row align-items-center fila2">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                <div className="row align-items-end fila2">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
                {/*Estamos usando el modo self que se hace directamente a los hijos del contenedor padre*/}
                <div className="row fila2">
                    <div className="col-3 align-self-center columna">Columna 1</div>
                    <div className="col-3 align-self-end columna">Columna 2</div>
                    <div className="col-3 align-self-start columna">Columna 3</div>
                </div>
            </div>
            <br />
            <Code code={HTMLAliAlign} language="html"/>
            <br />
            <p>Eliminacion de espacios en filas y columnas (g-0), pero tambien podemos agregar: </p>
            <ul>
                <li>Gutter en los cuatro lados: [g-valor] [g-md-valor]... g=xs, sm, md, lg, xl, xxl, valor=0,1,2,3,4,5</li>
                <li>Gutter en horizontal: igual que el anterio pero [gx-valor] [gx-md-valor]</li>
                <li>Gutter en vertical: igual que el anterior [gy-valor] [gx-md-valor]</li>
            </ul>
            <br />
            <div className="container">
                <div className="row g-1 fila2">
                    <div className="col-3 columna">Columna1</div>
                    <div className="col-3 columna">Columna2</div>
                    <div className="col-3 columna">Columna2</div>
                </div>
                <div className="row fila2">
                    <div className="col-3 columna">Columna 1</div>
                    <div className="col-3 columna">Columna 2</div>
                    <div className="col-3 columna">Columna 3</div>
                </div>
            </div>
            <br />
            <Code code={HTMLAliGutter} language="html"/>
            <br />
            <p>Desplazamiento de columnas: </p>
            <ul>
                <li>Offset: [offset-tamaño-numero] tamaño=opcional, numero=numero de columnas</li>
                <li>Margin: [direccion-tamaño-auto] direcion= ms(margin start) o me(margin end), tamaño=opcional, auto=siempre</li>
                <li>Re-ordenamiento: [order-tamaño-numero] tamaño=opcional, numero= de 1 a 5. Tambien existen nuevas clases 
                    order-first(poner la columna hasta el inicio) y order-last(Poner la columna hasta el final)
                </li>
                <li>Anidacion: consiste en introducir columnas dentro de columnas</li>
            </ul>
            <br />
            <div className="container">
                <div className="row row-cols-12 fila">
                    <div className="col columna">1</div>
                    <div className="col columna">2</div>
                    <div className="col columna">3</div>
                    <div className="col columna">4</div>
                    <div className="col columna">5</div>
                    <div className="col columna">6</div>
                    <div className="col columna">7</div>
                    <div className="col columna">8</div>
                    <div className="col columna">9</div>
                    <div className="col columna">10</div>
                    <div className="col columna">11</div>
                    <div className="col columna">12</div>
                </div>
                {/*Offset y margin*/}
                <div className="row fila">
                    <div className="col-3 offset-md-3 columna">Columna</div>
                </div>
                <div className="row fila">
                    <div className="col-3 ms-auto columna">Columna</div>
                    <div className="col-3 columna">Columna</div>
                </div>
                {/*Order de columnas*/}
                <div className="row fila">
                    <div className="col-2 order-1 columna">1</div>
                    <div className="col-2 columna">2</div>
                    <div className="col-2 order-2 columna">3</div>
                </div>
                {/*Anidacion de columnas*/}
                <div className="row fila">
                    <div className="col-6 columna">
                        Columna 1
                        {/*Anidamos columnas creando una nueva fila y dentro las 
                        columnas que quieras*/}
                        <div className="row fila">
                            <div className="col columna">Columna anidada 1</div>
                            <div className="col columna">Columna anidada 2</div>
                        </div>
                    </div>
                    <div className="col-6 columna">Columna 2</div>
                </div>
            </div>
            <br />
            <Code code={HTMLDesplaza} language="html"/>
        </>
    );
}


// CODIGOS PARA INCRUSTAR EN LA PAGINA -------------------------------------------
const CodeHTML = 
`   // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px)

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px)

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px)

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px)

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px)
`;

const CodeHTMLGrid = 
`<div className='container'>
    {/*Dividimos la fila en dos columnas*/}
    <div className="row">
        <div className="col bg-primary">Columna 1</div>
        <div className="col bg-success">Columna 2</div>
    </div>
    <div className="row">
        <div className="col bg-warning">Clase col</div>
        {/*El ancho ocupa lo mismo que su contenido*/}
        <div className="col-auto bg-info">Clase col-auto</div>
        <div className="col bg-warning">Clase col</div>
    </div>
    <div className="row">
        <div className="col-4 bg-primary">Clase col-4</div>
        <div className="col-8 bg-success">Clase col-8</div>
    </div>
    <div className="row">
        {/*Tamaño pequeño 12 col, mediano 6 col y grande 9 col*/}
        <div className="col-12 col-md-6 col-lg-9 bg-info">col-12 col-md-6 col-lg-9</div>
        <div className="col-12 col-md-6 col-lg-3 bg-warning">col-12 col-md-6 col-lg-3</div>
    </div>
    <div className="row">
        <div className="col-4 bg-primary">Columna 1</div>
        <div className="col-4 bg-success">Columna 2</div>
        {/*Das saltos entre columnas*/}
        <div className="w-100"></div>
        <div className="col-4 bg-primary">Columna 3</div>
        <div className="col-4 bg-success">Columna 4</div>
    </div>
    {/*Indicas el numero de elementos que hay en cada fila*/}
    <div className="row row-cols-2">
        <div className="col bg-primary">Columna</div>
        <div className="col bg-success">Columna</div>
        <div className="col bg-primary">Columna</div>
        <div className="col bg-success">Columna</div>
    </div>
</div>
`;

const HTMLAliJustify = 
`<div className="row justify-content-start fila">
    <div className="col-3 columna">Columna 1</div>
    <div className="col-3 columna">Columna 2</div>
    <div className="col-3 columna">Columna 3</div>
</div>
    <div className="row justify-content-center fila">
    <div className="col-3 columna">Columna 1</div>
    <div className="col-3 columna">Columna 2</div>
    <div className="col-3 columna">Columna 3</div>
</div>
`;


const HTMLAliAlign = 
`<div className="row align-items-start fila2">
    <div className="col-3 columna">Columna 1</div>
    <div className="col-3 columna">Columna 2</div>
    <div className="col-3 columna">Columna 3</div>
</div>
<div className="row align-items-center fila2">
    <div className="col-3 columna">Columna 1</div>
    <div className="col-3 columna">Columna 2</div>
    <div className="col-3 columna">Columna 3</div>
</div>
`;

const HTMLAliGutter = 
`<div className="row align-items-start fila2">
    <div className="col-3 columna">Columna 1</div>
    <div className="col-3 columna">Columna 2</div>
    <div className="col-3 columna">Columna 3</div>
</div>
<div className="row align-items-center fila2">
    <div className="col-3 columna">Columna 1</div>
    <div className="col-3 columna">Columna 2</div>
    <div className="col-3 columna">Columna 3</div>
</div>
`;

const HTMLDesplaza = 
`<div className="container">
    <div className="row row-cols-12 fila">
        <div className="col columna">1</div>
        <div className="col columna">2</div>
        <div className="col columna">3</div>
        <div className="col columna">4</div>
        <div className="col columna">5</div>
        <div className="col columna">6</div>
        <div className="col columna">7</div>
        <div className="col columna">8</div>
        <div className="col columna">9</div>
        <div className="col columna">10</div>
        <div className="col columna">11</div>
        <div className="col columna">12</div>
    </div>
    {/*Offset y margin*/}
    <div className="row fila">
        <div className="col-3 offset-md-3 columna">Columna</div>
    </div>
    <div className="row fila">
        <div className="col-3 ms-auto columna">Columna</div>
        <div className="col-3 columna">Columna</div>
    </div>
    {/*Order de columnas*/}
    <div className="row fila">
        <div className="col-2 order-1 columna">1</div>
        <div className="col-2 columna">2</div>
        <div className="col-2 order-2 columna">3</div>
    </div>
    {/*Anidacion de columnas*/}
    <div className="row fila">
        <div className="col-6 columna">
            Columna 1
            {/*Anidamos columnas creando una nueva fila y dentro las 
            columnas que quieras*/}
            <div className="row fila">
                <div className="col columna">Columna anidada 1</div>
                <div className="col columna">Columna anidada 2</div>
            </div>
        </div>
        <div className="col-6 columna">Columna 2</div>
    </div>
</div>

`;