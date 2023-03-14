import './menu.css';
import FecharMenu from '../Buttom_fechar_menu/buttom_fechar_menu';

export default function Menu() {
    return (
        <section className='index_menu'>
            <div className='b'>
               {/*  <FecharMenu/> */}
            </div>
            <header id="home" >
                <nav className="menu">
                    <a href="#sobre" className="topcis">Sobre</a>
                    <a href="#certificados" className="topcis">Cursos</a>
                    <a href="#projects" className="topcis">Projetos</a>
                    <a href="#contatos" className="topcis">Contatos</a>
                </nav>
            </header>
        </section>
    )
}