
import React, { useState } from "react";
import "./menu_buttom.css";



export default function Buttom_Menu() {

    const [openMenu, setOpenMenu] = useState(false);
    function aparecer() {
        setOpenMenu(!openMenu)
    }

    const [fecharmenu, setFecharMenu] = useState();
    function fechar() {
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


                    <div className="menu_um">
                        <button onClick={aparecer} >
                            <img src="assets/img/fechar_.png" alt="fechar" className="buttom_close" />
                        </button>
                        <nav className="menu">
                            <a href="#sobre" className="topcis">Sobre</a>
                            <a href="#certificados" className="topcis">Cursos</a>
                            <a href="#projects" className="topcis">Projetos</a>
                        </nav>
                    </div>



                    <div className="container_contatos">
                        <p className="topciss">Contatos</p>
                        <div className="footer-container-item">
                            <a href="https://wa.me/5541984360158" target="_blank">
                                <img src="assets/img/footer/whats_logo.png" alt=""
                                    className="logo_footer" /></a>
                            <a href="mailto:tecjardelv@gmail.com" target="_blank">
                                <img src="assets/img/footer/gmail_logo.png" alt=""
                                    className="logo_footer" /></a>
                            <a href="https://www.linkedin.com/in/newjardel-vasconcelos" target="_blank">
                                <img
                                    src="assets/img/footer/linkedin_logo.png" alt="" className="logo_footer" /></a>
                            <a href="https://github.com/jardelvasconcelos" target="_blank">
                                <img src="assets/img/footer/github_logo.png" alt=""
                                    className="logo_footer" /></a>
                        </div>
                    </div>

                </section>
            </section>
        </section>

    )
}