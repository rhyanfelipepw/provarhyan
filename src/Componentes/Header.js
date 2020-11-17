import React from 'react';
import '../Style/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return ( 
    <>
    <div className='body1'>
        <div className="header">
           <ul>
               <Link to="/">
                <li>       
                  Inicio
                  </li>
               </Link>          
               <Link to="/pagina2">
                <li>       
                  Contatos
                  </li>
               </Link>
               <Link to="/pagina3">
                <li>       
                  Loja
                  </li>
               </Link>
               <Link to="/pagina4">
                <li>       
                  Redes sociais
                  </li>
               </Link>
           </ul>
        </div>
    </div>
   
    </>
  );
}


