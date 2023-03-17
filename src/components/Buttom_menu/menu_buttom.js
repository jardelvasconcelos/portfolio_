
import React, { useState } from "react";
import Menu from "../Menu/menu.js";
import "./menu_buttom.css";


export default function Buttom_Menu() {

    const [openMenu, setOpenMenu] = useState('visibilidadeN');

    function Aparecer() {
        setOpenMenu('visibilidadeOk');
    }

    return (
        <section>
            <div className="container_buttom ">
                <button onClick={Aparecer} >
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                </button>
            </div>
            <div className={openMenu}>
                <Menu/>
            </div>
        </section>

    )
}