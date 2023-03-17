
import React,{useState} from "react";
import "./menu_buttom.css";


export default function Buttom_Menu(){

    const [openMenu , setOpenMenu] = useState('visibilidadeOK');

    function Aparecer() {
        setOpenMenu('visibilidadeN');
    }

    return (
        <div className={openMenu}>
        <button onClick = {Aparecer} className = "container_buttom ">
                <div className="menu_burger"></div>
                <div className="menu_burger"></div>
                <div className="menu_burger"></div>    
        </button>    
        </div>

    )
}