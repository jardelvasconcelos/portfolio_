import './capa.css';
import Buttom_Menu from '../Buttom_menu/menu_buttom';
// Com Arrow Function
const Capa = () => {
    return (
        <section className=" tela_home " id="initial">
            <Buttom_Menu />
            <section className='content_home_content_'>
                <div className=" section">
                    <h1 className="content_title color-4 font4">Desenvolvedor Front-End Jr</h1>
                    <p className="content_description_ color-4 font4">Convido você a conhecer um pouco sobre mim e dos meus projetos.
                        Seja muito bem-vindo(a), espero que goste do que lhe será apresentado.</p>
                </div>
            </section>
        </section>
    )
}
export default Capa;