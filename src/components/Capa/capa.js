import './capa.css';
import Buttom_Menu from '../Buttom_menu/menu_buttom';
// Com Arrow Function
const Capa = () =>{
    return (
        <section className=" tela_home "  id = "initial">
            <Buttom_Menu/> 
        <section > 
            <div className="content_home_content_  section">
                <h1 className="content_title color-4">Desenvolvedor Front-End Junior</h1>
                <p className="content_description color-4">Convido você a conhecer um pouco sobre mim e dos meus projetos.
                    Seja muito bem-vindo(a), espero que goste do que lhe será apresentado.</p>
            </div>
        </section>
        </section>
    )
}
export default Capa;