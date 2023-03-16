import React from "react";
import React,{useState} from "react";
import "./menu_buttom.css";


export default function Buttom_Menu(){

    const [openMenu , setOpenMenu] = useState();

    return (
        <buttom onClick = {openMenu} className = "container_buttom">
            <a href="">
                <div className="menu_burger"></div>
                <div className="menu_burger"></div>
                <div className="menu_burger"></div>
            </a>
        </buttom>    

    )
}