import React, { useState } from 'react';
import './menu.css';

export default function Menu() {
    const [a, setA] = useState('display_dentro');

    function desaparecer() {
        setA('display_fora');
    }

    return (
        <section className={a}>
            <section className='index_menu'>
                <div>
                    <button onClick={desaparecer} className="buttom_close">X</button>
                </div>
                <header >
                    <nav className="menu">
                        <a href="#sobre" className="topcis">Sobre</a>
                        <a href="#certificados" className="topcis">Cursos</a>
                        <a href="#projects" className="topcis">Projetos</a>
                        <a href="#contatos" className="topcis">Contatos</a>
                    </nav>
                </header>
            </section>
        </section>
    )
}