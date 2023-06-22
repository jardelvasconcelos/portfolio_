
import React, { useState } from "react";
import 'animate.css';
import "./menu_buttom.css";



export default function Buttom_Menu() {

    const [openMenu, setOpenMenu] = useState(false);
    function aparecer() {
        setOpenMenu(!openMenu);
    }
    return (

        <section className="testes">
            <div className="container_buttom ">
                <button onClick={aparecer} >
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                </button>
            </div>
            {/* div>p+h2.menu+section>ul>li#item$*5>a */}
            <section className={openMenu ? 'dentro' : 'fora'}>
                <section className='index_menu'>
                    <div className="menu_um">
                        <button onClick={aparecer} >
                            <img src="assets/img/fechar_.png" alt="fechar" className="buttom_close" />
                        </button>
                        <nav className="menu">
                            <div className="person">
                                <img className="image_perfil_ " src="assets/img/home/imageperfil.png" alt="" />
                            </div>
                        </nav>
                    </div>

                    <div className="container_contatos">
                        <p className="topciss">Meus Contatos</p>
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