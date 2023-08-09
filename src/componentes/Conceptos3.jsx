import Code from '../prism/Code';
import '../prism.css';
import '../estilos/Conceptos3.css';
import img3 from '../assets/buzz.jpg';

export const Conceptos3 = () => {

    return(
        <>
            <h1>MANUAL BOOTSTRAP 5</h1>
            <br />
            <h4>CONCEPTOS III (Imagenes, Tablas y componentes)</h4>
            <br />
            <h5>-Imagenes</h5>
            <ul>
                <li>
                    <b>Imagen Responsive: </b> para que las imagenes se adapten deacuerdo al ancho de su contenedor padre para ellos
                    implementamos la clase img-fluid
                </li>
                <li>
                    <b>Imagenes con borde: </b> para ello usamos la clase img-thumbnail
                </li>
                <li>
                    <b>Figure & figcaption (etiquetas): </b> Figure se utiliza para indicar al navegador que el contenido que hay dentro de la etiqueta 
                    es de retroalimentacion para el texto que se encuentra en la parte de arriba o abajo. Y con Figcaption lo que hacemos 
                    es añadir una descripcion un titulo o el nombre del autor de la imagen. Las clases son [figure]: esta se la añadimos a la etiqueta 
                    Figure, [figure-caption]: se le añade a la etiqueta Figcaption, [figure-img]: esta es para añadirsela a la imagen.
                </li>
            </ul>
            <br />
            <div className='d-flex justify-content-around align-items-center'>
                <article className='mb-3 shadow-lg flex-itemA'>
                    <img src={img3} alt="Buzz LightYear" className='img-fluid'/>
                </article>
                <article className='mb-3 shadow-lg flex-itemA'>
                    <img src={img3} alt="Buzz LightYear" className='img-fluid img-thumbnail'/>
                </article>
                <article className='mb-3 shadow-lg flex-itemA'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <figure className='figure'>
                        <img src={img3} alt="Buzz LightYear" className='img-fluid figure-img'/>
                        <figcaption className='figure-caption'>
                            <cite>Nombre autor</cite>
                        </figcaption>
                    </figure>
                </article>
            </div>
            <p>VAMOS POR EL VIDEO 69</p>
        </>
    );
}

// <Code code={HTMLFlex2} language="html"/>

// CODIGOS PARA INCRUSTAR EN LA PAGINA -------------------------------------------
const HTMLFlex = 
`<!--Flex-direction-->
<div className="d-flex flex-row-reverse flex-content bg-dark text-white text-center">
    <div className="flex-item p-2 bg-info">1</div>
    <div className="flex-item p-2 bg-warning">2</div>
    <div className="flex-item p-2 bg-success">3</div>
    <div className="flex-item p-2 bg-danger">4</div>
</div>

`;