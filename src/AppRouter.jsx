import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { IniBoots } from './componentes/IniBoots';
import { Home } from './componentes/Home';
import { ColoresBoots } from './componentes/ColoresBoots';
import { Conceptos1 } from './componentes/Conceptos1';
import { Conceptos2 } from './componentes/Conceptos2';

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/inicioBoots' element={<IniBoots/>}/>
                <Route path='/bordescoloresBoots' element={<ColoresBoots/>}/>
                <Route path='/conceptos1' element={<Conceptos1/>}/>
                <Route path='/conceptos2' element={<Conceptos2/>}/>
                {/* <Route path='/category/:category' element={<CategoryPage/>} /> */}
            </Routes>
        </>
    );
}