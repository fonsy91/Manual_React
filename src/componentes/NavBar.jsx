import { Link } from 'react-router-dom';
import '../estilos/NavBar.css';
import { AppRouter } from '../AppRouter';

$(document).ready(function () {
    var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

    trigger.click(function () {
        hamburger_cross();      
    });

    function hamburger_cross() {

        if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });  
});

export const  NavBar = () => {

    return(
        <div id="wrapper">
            <div className="overlay"></div>
            <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                <ul className="nav sidebar-nav">
                    <div className="sidebar-header">
                    <div className="sidebar-brand">
                    <p style={{color: 'white'}}>MENU</p></div></div>
                    <li><Link to="/">Inicio</Link></li>
                    <li className="dropdown">
                        <a href="#works" className="dropdown-toggle" data-bs-toggle="dropdown">Bootstrap<span className="caret"></span></a>
                        <ul className="dropdown-menu animated fadeInLeft" role="menu">
                            <li><Link to="/inicioBoots">Inicio Bootstrap</Link></li>
                            <li><Link to="/bordescoloresBoots">Bordes y Colores</Link></li>
                            <li><Link to="/conceptos1">Conceptos 1</Link></li>
                            <li><Link to="/conceptos2">Conceptos 2</Link></li>
                            <li><Link to="/conceptos3">Conceptos 3</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#works" className="dropdown-toggle" data-bs-toggle="dropdown">Javascript<span className="caret"></span></a>
                        <ul className="dropdown-menu animated fadeInLeft" role="menu">
                            <li><Link to="/inicioBoots">Inicio Javascript</Link></li>

                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#works" className="dropdown-toggle" data-bs-toggle="dropdown">React<span className="caret"></span></a>
                        <ul className="dropdown-menu animated fadeInLeft" role="menu">
                            <li><Link to="/inicioBoots">Inicio React</Link></li>

                        </ul>
                    </li>
                </ul>
            </nav>

            <div id="page-content-wrapper">
                <button type="button" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                    <span className="hamb-top"></span>
                    <span className="hamb-middle"></span>
                    <span className="hamb-bottom"></span>
                </button>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 col-lg-offset-2">
                            {/*Aqui apareceran todos los componentes que accedamos desde las rutas del sideNav
                            este componente AppRouter es como el router-outlet de Angular*/}
                            <AppRouter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
