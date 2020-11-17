import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import './App.css';


import pagina1 from './Pages/page1';
import pagina2 from './Pages/page2';
import pagina3 from './Pages/page3';
import pagina4 from './Pages/page4';
import error404 from './Pages/error404.js';
export default function App() {

    return (
        <>
        <BrowserRouter>
                  <Header/>
                <Switch>
                    <Route path="/" exact component={pagina1} />
                    <Route path="/pagina2" component={pagina2} />
                    <Route path="/pagina3" component={pagina3} />
                    <Route path="/pagina4" component={pagina4} />
                    <Route path="*" component={error404} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}