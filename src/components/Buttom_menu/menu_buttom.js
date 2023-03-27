
import React, { useState } from "react";
import "./menu_buttom.css";



export default function Buttom_Menu() {

    const [openMenu, setOpenMenu] = useState(false);
    function aparecer() {
        setOpenMenu(!openMenu)
    }

    const[fecharmenu , setFecharMenu] = useState();
    function fechar(){
        setFecharMenu('visibilidadeN')
    }
    return (
        <section>
            <div className="container_buttom ">
                <button onClick={aparecer} >
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                </button>
            </div>
            <section className={openMenu ? 'visibilidadeOk' : 'visibilidadeN'}>
                <section className='index_menu'>
                    <div>
                        <button onClick={aparecer} >
                            <img src="assets/img/fechar.png" alt="" className="buttom_close" />
                        </button>
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
        </section>

    )
}