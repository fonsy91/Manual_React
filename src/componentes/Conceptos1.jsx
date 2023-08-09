import Code from '../prism/Code';
import '../prism.css';
import '../estilos/Conceptos1.css';

export const Conceptos1 = () => {

    return(
        <>
            <h1>MANUAL BOOTSTRAP 5</h1>
            <br />
            <h4>CONCEPTOS I (Posicionamiento)</h4>
            <ul>
                <li>
                    <b>Float: </b> nos permite enfloat un elemento ya sea a la izquierda o a la derecha. [float-direccion], [float-tamaño-direccion],
                    <b>direccion:</b> start, end, none, <b>tamaño:</b> sm, md, lg, xl
                </li>
                <li>Cuando usas dos float con colores dentro de un div el color de fondo desaparece, para solucionar este problema usamos <b>clearfix</b></li>
                <li>
                    Puedes usar los tamaños para hacer responsive la pagina es decir si ponemos float-lg-left decimos que cuando la pantalla sea lg(960px)
                    o mas el elemento se colocara a la izquierda de la pantalla.
                </li>
            </ul>
            <br />
            <div className="bg-warning clearfix">
                <p className='float-start bg-success rounded'>Parrafo 1</p>
                <p className='float-end bg-success rounded'>Parrafo 2</p>
            </div>
            <br />
            <Code code={HTMLFloat} language="html"/>
            <br />
            <ul>
                <li>
                    <b>Display: </b>indica la forma en como se va a ver un elemento, si va a abarcar el 100% de la pantalla o el espacio que 
                    necesita [d-tipoDisplay] o [d-tamaño-tipoDisplay], <b>tipoDisplay:</b> none, inline, inline-block, block, grid, table, table-cell, table-row, flex, 
                    inline-flex, <b>tamaño:</b> sm, md, lg, xl.
                </li>
            </ul>
            <br />
            {/*Por defecto los <p> tiene un dipaly block y los <span> un display inline*/}
            <p className='bg-primary d-inline'>Parrafo 1</p>
            <p className='bg-secondary'>Parrafo 2</p>
            <span className='bg-success d-block'>Span 1</span>
            <span className='bg-warning'>Span 2</span>
            <br />
            <Code code={HTMLDisplay} language="html"/>
            <br />
            <ul>
                <li>
                    <b>Embed: </b> sirve para incrustar una pagina dentro de nuestra pagina, como por ejemplo traer un video de youtube o un mapa de
                    google maps [embed-responsive], [embed-responsive-tamañoVideo], <b>TamañoVideo = </b> -21by9 (21:9), -16by9 (16:9), -4by3 (4:3), -1by1 (1:1) y
                    [embed-responsive-item]
                </li>
            </ul>
            <br />
            {/* <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' width="560" height="315" src="https://www.youtube.com/embed/6KmnTzQM6sQ" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div> */}
            <ul>
                <li><b>Boton cierre (Close icon): </b></li>
            </ul>
            <button type="button" className="btn-close bg-info text-white rounded p-2" aria-label="Close"></button>
            <br /><br />
            <ul>
                <li>
                    <b>Espaciado: </b> con esto hacemos referencia a todas la clases de margin y padding. [espacioUBICACION-tamaño] o 
                    [espacioUBICACION-pantalla-tamaño]. <b>espacio: </b>m (margin),p (padding) <b>ubicacion: </b> t, b, s, e, x, y 
                    (top, bottom, start, end, eje horizontal y vertical) <b>tamaño: </b> 0, 1, 2, 3, 4, 5 (0rem, .5rem, 1rem, 1.5rem, 2rem, 2.5rem) <b>pantalla: </b> sm, md, lg, xl
                </li>
                <li>
                    <b>Centrado-horizontal: </b> podemos centar un elemento de tipo bloque en el eje de las x. <b>mx-auto</b>
                </li>
                <li>
                    <b>Margenes Negativos: </b> sintaxis [mUBICACION-nTAMAÑO] o [mUBICACION-pantalla-nTAMAÑO]. <b>m: </b>Margin <b>ubicacion: </b> t, b, s, e, x, y
                    <b>n: </b> negativo <b>tamaño: </b> 0, 1, 2, 3, 4, 5 <b>pantalla: </b> sm, md, lg, xl
                </li>
            </ul>
            <br />
            <div className="container">
                <div className="row">
                    {/*Sintaxis: espacioUBICACION-tamaño*/}
                    {/*px-3: aplica un padding a la izquierda y derecha es decir en el eje x*/}
                    {/*p-3: aplicara padding al eje x e y es decir a todos los lados*/}
                    <div className='caja bg-primary mb-2 px-3'>Caja 1</div>
                    <div className='w-100'></div>
                    <div className='caja bg-success ms-5 px-3'>Caja 2</div>
                    {/*Haciendo uso del centrado horizontal*/}
                    <div className="w-10"></div>
                    <div className="caja bg-danger mt-2 mx-auto">Caja 3</div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    {/*Sintaxis: mUBICACION-nTAMAÑO*/}
                    <div className='caja bg-primary mb-2 px-3'>Caja 1</div>
                    <div className='w-100'></div>
                    {/*Agregamos una (n) para asignar margenes negativos*/}
                    <div className="caja bg-info mt-n3">Margen negativo</div>
                </div>
            </div>
            <b></b>
            <Code code={HTMLMargin} language="html"/>
            <br />
            <ul>
                <li>
                    <b>Sombras: </b>  Añadir= shadow-sm, shadow, shadow-lg. Eliminar= shadow-none
                </li>
            </ul>
            <br />
            <div className="container">
                <div className="row row-cols-1">
                    <div className="mb-4 p-2 shadow-sm">Sombra pequeña</div>
                    <div className="mb-4 p-2 shadow">Sombra regular</div>
                    <div className="mb-4 p-2 shadow-lg">Sombra grande</div>
                    <div className="bg-light shadow-none">Sin sombra</div>
                </div>
            </div>
            <br />
            <h5>POSICIONAMIENTO</h5>
            <ul>
                <li>
                    <b>Sintaxis: </b> [position-tipo], tipo= static, relative, absolute, *fixed (fixed-top), *sticky (sticky-top)
                </li>
                <li>
                    <a href="https://getbootstrap.com/docs/5.0/utilities/position/" target="_blank">Posicionamiento</a>
                </li>
            </ul>
            <br />
            <div className="bg-dark position-relative contenedor">
                <div className="bg-primary caja2">Caja 1</div>
                {/*static: permanece quieto jamas se va a mover (viene por defecto en CSS)*/}
                {/*absolute: hace que al elemento que se le aplico pierda su lugar y se mueva respecto a su 
                contenedor mas cercano que tenga un posicionamineto relativo si no lo hay se guia por el body*/}
                <div className="bg-success caja2 position-absolute posicion">Caja 2</div>
                <div className="bg-warning caja2">Caja 3</div>
            </div>
            <br />
            <div className="bg-dark contenedor2">
                <div className="bg-primary caja2">Caja 1</div>
                {/*fixed: el elemento se posiciona con respecto al viewport*/}
                {/*sticky: pega el elemento de acuerdo a la propiedad offset que indiques*/}
                <div className="bg-success caja2 position-sticky posicion2">Caja 2</div>
                <div className="bg-warning caja2">Caja 3</div>
            </div>
            <br />
            <Code code={HTMLFixedSticky} language="html"/>
            <br />
            <ul>
                <li>
                    <b>Tamaño: </b> Podemos añadir tamaños de ancho y alto que pueden ser relativos al elemento padre [lado-tamaño] 
                    lado= w, mw, h, mh (ancho y minimo de ancho) tamaño= 25, 50, 75, 100% o relativos a la ventana [lado-100]
                    lado= vw, vh
                </li>    
            </ul>    
            <br />
            <h6>Width</h6>
            <div className="bg-dark mb-4 contenedor3">
                <div className="bg-primary mb-2 w-25">Caja 1</div>
                <div className="bg-success mb-2 w-50">Caja 2</div>
                <div className="bg-warning mb-2 w-75">Caja 3</div>
                <div className="bg-danger mb-2 w-100">Caja 4</div>
                {/*Hace que abarque el 100% del ancho de la pantalla*/}
                <div className="bg-info vw-100">Caja 5</div>
            </div>
            <h6>Height</h6>
            <div className="bg-dark mb-4 d-flex contenedor3">
                <div className="bg-primary mb-2 h-25">Caja 1</div>
                <div className="bg-success mb-2 h-50">Caja 2</div>
                <div className="bg-warning mb-2 h-75">Caja 3</div>
                <div className="bg-danger mb-2 h-100">Caja 4</div>
                {/*vh-100 igual que el otro pero hacia abajo*/}
                <div className="bg-info">Caja 5</div>
            </div>
            <Code code={HTMLTamanio} language="html"/>
            <br />
            <h5>Textos y alineacion</h5>
            <ul>
                <li>
                    <b>Alineacion: </b> Nos permite alienar nuestros textos a un lado en especial. [text-direccion] [text-pantalla-direccion]
                    direccion= start, center, end, justify. pantalla=sm, md, lg, xl.
                </li>
                <li>
                    <b>Transformaciones: </b> Un texto lo puedes transfomar a mayusculas a minusculas. [text-transformacion] 
                    transformacion= lowercase, uppercase, capitalize (letra capital)
                </li>
                <li>
                    <b>Peso de fuente: </b> Se refiere a si el texto esta en negrita, muy delgado. [fw-peso] peso= bold, bolder, normal, light, lighter 
                </li>
                <li>
                    <b>Cursivas: </b> solo hay una clase font-italic y permite poner el texto en cursiva
                </li>
                <li>
                    <b>Restablecer color: </b> podemos usar la clase text-reset y hacer que un elemento herede el color de su elemento padre.
                </li>
                <li>
                    <b>Decoracion de texto: </b> nos sirve para eliminar la linea de debajo de los enlaces text-decoration-none
                </li>
                <li>
                    <b>Ajuste y desbordamiento de texto: </b> Cuando un texto se sale de un contenedor se usa esta clase <b>text-wrap badge</b>, 
                    tambien se puede sustituir por la clase <b>text-truncate</b> que hara que el texto ocupe lo justo y lo demas se pondra en puntos suspensivos,
                    tambien puedes utilizar un elemento inline en un elemento bloque usando text-truncate d-block o text-truncate d-inline-block
                </li>
                <li>
                    <b>Visiblidad: </b> permite hacer visible o no un elemento usaremos dos clase visible e invisible
                </li>
                <li>
                    <b>Alineacion de elementos: </b> se refiere a que nosotros podemos alienar de forma vertical a un texto, aprte de arriba, en medio o abajo con respecto con 
                    sus laterales. [align-direccion] direccion=baseline, top, middle, bottom, text-top, text-bottom

                </li>
            </ul>
            <br />
            <div className="container">
                <div className="row row-cols-1">
                    <h6>Textos Alineacion</h6>
                    <hr />
                    <p className='text-start'>Izquierda</p>
                    <p className='text-end'>Derecha</p>
                    <p className='text-center'>Centro</p>
                    <p className='text-justify'>Justificado. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quisquam quia error sit maxime quos officiis esse commodi facilis ullam incidunt quo sed reiciendis repellendus dicta omnis, vel quam quae vero cumque. Doloremque unde aspernatur, sapiente assumenda vel quia, est itaque in suscipit, quas iusto quidem dignissimos repellat et fugiat.</p>
                    <p className='text-sm-center text-md-right text-lg-left'>Pantalla especial</p>
                    
                    <h6>Transformaciones</h6>
                    <hr />
                    <p className='text-lowercase'>Transformacion minuscula</p>
                    <p className='text-uppercase'>Transformacion mayuscula</p>
                    <p className='text-capitalize'>Transformacion capital</p>
                    
                    <h6>Peso de Fuente</h6>
                    <hr />
                    <p className='fw-bold'>Texto en negrita</p>
                    <p className='fw-bolder'>Texto de mas peso que negritas</p>
                    <p className='fw-normal'>Texto peso normal</p>
                    <p className='fw-light'>Texto peso ligero</p>
                    <p className='fw-lighter'>Texto peso mas ligero</p>
                    <p className='fwt-italic'>Texto en cursiva</p>

                    <h6>Restablecer color</h6>
                    <hr />
                    <p className='text-success'>
                        Este texto es de color verde
                        <a href="" className='text-reset'>etiqueta a lo tiene que heredar</a>
                    </p>

                    <h6>Ajuste y desbordamiento de texto</h6>
                    <hr />
                    <div className="col-6">
                        <p className='bg-primary text-wrap badge desbord' >Este texto debe ajustarse</p>
                    </div>
                    <div className="col-6">
                        <p className='bg-success text-truncate desbord' >Este texto debe ajustarse</p>
                    </div> 
                    <br />

                    <h6>Visibilidad</h6>
                    <hr />
                    <div className="container">
                        <div className='row text-white text-center justify-content-center'>
                            <div className="col-3 bg-warning visible">
                                <p>Visible</p>
                            </div>
                            <div className="col-3 bg-info invisible">
                                <p>Invisible</p>
                            </div>
                            <div className="col-3 bg-danger">
                                <p>Normal</p>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                    <h6>Alineacion de elementos</h6>
                    <hr />
                    <div className="container">
                        <div className="row row-cols-1">
                            <h6>Elementos inline</h6>
                            <p className='pCon'>Alineacion <span className='spanCon align-baseline'>baseline</span></p>
                            <p className='pCon'>Alineacion <span className='spanCon align-top'>top</span></p>
                            <p className='pCon'>Alineacion <span className='spanCon align-middle'>middle</span></p>
                            <p className='pCon'>Alineacion <span className='spanCon align-bottom'>bottom</span></p>
                            <p className='pCon'>Alineacion <span className='spanCon align-text-top'>text-top</span></p>
                            <p className='pCon'>Alineacion <span className='spanCon align-text-bottom'>text-bottom</span></p>
                        </div>
                    </div>
                    <div className='row row-cols-1'>
                        <table className='mb-5 tabla table-bordered'>
                            <tbody>
                                <tr>
                                    <td className='align-baseline'>baseline</td>
                                    <td className='align-top'>top</td>
                                    <td className='align-middle'>middle</td>
                                    <td className='align-bottom'>bottom</td>
                                    <td className='align-text-top'>text-top</td>
                                    <td className='align-text-bottom'>text-bottom</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
            <Code code={HTMLTexto} language="html"/>
            
        </>
    );
}


// CODIGOS PARA INCRUSTAR EN LA PAGINA -------------------------------------------
const HTMLFloat = 
`<div className="bg-warning clearfix">
    <p className='float-start bg-success rounded'>Parrafo 1</p>
    <p className='float-end bg-success rounded'>Parrafo 2</p>
</div>
`;

const HTMLDisplay = 
`<p className='bg-primary d-inline'>Parrafo 1</p>
<p className='bg-secondary'>Parrafo 2</p>
<span className='bg-success d-block'>Span 1</span>
<span className='bg-warning'>Span 2</span>
`;

const HTMLMargin = 
` <div className="container">
    <div className="row">
        {/*Sintaxis: espacioUBICACION-tamaño*/}
        {/*px-3: aplica un padding a la izquierda y derecha es decir en el eje x*/}
        {/*p-3: aplicara padding al eje x e y es decir a todos los lados*/}
        <div className='caja bg-primary mb-2 px-3'>Caja 1</div>
        <div className='w-100'></div>
        <div className='caja bg-success ms-5 px-3'>Caja 2</div>
        {/*Haciendo uso del centrado horizontal*/}
        <div className="w-10"></div>
        <div className="caja bg-danger mt-2 mx-auto">Caja 3</div>
    </div>
</div>
<b></b>
<div className="container">
    <div className="row">
        {/*Sintaxis: mUBICACION-nTAMAÑO*/}
        <div className='caja bg-primary mb-2 px-3'>Caja 1</div>
        <div className='w-100'></div>
        {/*Agregamos una (n) para asignar margenes negativos*/}
        <div className="caja bg-info mt-n3">Margen negativo</div>
    </div>
</div>
`;

const HTMLFixedSticky = 
` <div className="bg-dark position-relative contenedor">
    <div className="bg-primary caja2">Caja 1</div>
    {/*static: permanece quieto jamas se va a mover (viene por defecto en CSS)*/}
    {/*absolute: hace que al elemento que se le aplico pierda su lugar y se mueva respecto a su 
    contenedor mas cercano que tenga un posicionamineto relativo si no lo hay se guia por el body*/}
    <div className="bg-success caja2 position-absolute posicion">Caja 2</div>
    <div className="bg-warning caja2">Caja 3</div>
</div>
<br />
<div className="bg-dark contenedor2">
    <div className="bg-primary caja2">Caja 1</div>
    {/*fixed: el elemento se posiciona con respecto al viewport*/}
    {/*sticky: pega el elemento de acuerdo a la propiedad offset que indiques*/}
    <div className="bg-success caja2 position-sticky posicion2">Caja 2</div>
    <div className="bg-warning caja2">Caja 3</div>
</div>
`;

const HTMLTamanio = 
`<h6>Width</h6>
<div className="bg-dark mb-4 contenedor3">
    <div className="bg-primary mb-2 w-25">Caja 1</div>
    <div className="bg-success mb-2 w-50">Caja 2</div>
    <div className="bg-warning mb-2 w-75">Caja 3</div>
    <div className="bg-danger mb-2 w-100">Caja 4</div>
    {/*Hace que abarque el 100% del ancho de la pantalla*/}
    <div className="bg-info vw-100">Caja 5</div>
</div>
<h6>Height</h6>
<div className="bg-dark mb-4 d-flex contenedor3">
    <div className="bg-primary mb-2 h-25">Caja 1</div>
    <div className="bg-success mb-2 h-50">Caja 2</div>
    <div className="bg-warning mb-2 h-75">Caja 3</div>
    <div className="bg-danger mb-2 h-100">Caja 4</div>
    {/*vh-100 igual que el otro pero hacia abajo*/}
    <div className="bg-info">Caja 5</div>
</div>
`;

const HTMLTexto = 
`<div className="container">
    <div className="row row-cols-1">
        <h6>Textos Alineacion</h6>
        <hr />
        <p className='text-start'>Izquierda</p>
        <p className='text-end'>Derecha</p>
        <p className='text-center'>Centro</p>
        <p className='text-justify'>Justificado. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quisquam quia error sit maxime quos officiis esse commodi facilis ullam incidunt quo sed reiciendis repellendus dicta omnis, vel quam quae vero cumque. Doloremque unde aspernatur, sapiente assumenda vel quia, est itaque in suscipit, quas iusto quidem dignissimos repellat et fugiat.</p>
        <p className='text-sm-center text-md-right text-lg-left'>Pantalla especial</p>
        
        <h6>Transformaciones</h6>
        <hr />
        <p className='text-lowercase'>Transformacion minuscula</p>
        <p className='text-uppercase'>Transformacion mayuscula</p>
        <p className='text-capitalize'>Transformacion capital</p>
        
        <h6>Peso de Fuente</h6>
        <hr />
        <p className='fw-bold'>Texto en negrita</p>
        <p className='fw-bolder'>Texto de mas peso que negritas</p>
        <p className='fw-normal'>Texto peso normal</p>
        <p className='fw-light'>Texto peso ligero</p>
        <p className='fw-lighter'>Texto peso mas ligero</p>
        <p className='fwt-italic'>Texto en cursiva</p>

        <h6>Restablecer color</h6>
        <hr />
        <p className='text-success'>
            Este texto es de color verde
            <a href="" className='text-reset'>etiqueta a lo tiene que heredar</a>
        </p>

        <h6>Ajuste y desbordamiento de texto</h6>
        <hr />
        <div className="col-6">
            <p className='bg-primary text-wrap badge desbord' >Este texto debe ajustarse</p>
        </div>
        <div className="col-6">
            <p className='bg-success text-truncate desbord' >Este texto debe ajustarse</p>
        </div> 
        <br />

        <h6>Visibilidad</h6>
        <hr />
        <div className="container">
            <div className='row text-white text-center justify-content-center'>
                <div className="col-3 bg-warning visible">
                    <p>Visible</p>
                </div>
                <div className="col-3 bg-info invisible">
                    <p>Invisible</p>
                </div>
                <div className="col-3 bg-danger">
                    <p>Normal</p>
                </div>
            </div>
        </div>
        <br /><br /><br />
        <h6>Alineacion de elementos</h6>
        <hr />
        <div className="container">
            <div className="row row-cols-1">
                <h6>Elementos inline</h6>
                <p className='pCon'>Alineacion <span className='spanCon align-baseline'>baseline</span></p>
                <p className='pCon'>Alineacion <span className='spanCon align-top'>top</span></p>
                <p className='pCon'>Alineacion <span className='spanCon align-middle'>middle</span></p>
                <p className='pCon'>Alineacion <span className='spanCon align-bottom'>bottom</span></p>
                <p className='pCon'>Alineacion <span className='spanCon align-text-top'>text-top</span></p>
                <p className='pCon'>Alineacion <span className='spanCon align-text-bottom'>text-bottom</span></p>
            </div>
        </div>
        <div className='row row-cols-1'>
            <table className='mb-5 tabla table-bordered'>
                <tbody>
                    <tr>
                        <td className='align-baseline'>baseline</td>
                        <td className='align-top'>top</td>
                        <td className='align-middle'>middle</td>
                        <td className='align-bottom'>bottom</td>
                        <td className='align-text-top'>text-top</td>
                        <td className='align-text-bottom'>text-bottom</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`;