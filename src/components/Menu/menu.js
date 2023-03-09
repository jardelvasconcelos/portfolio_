import './menu.css';

export default function Menu() {
    return (
        <header id="home">
            <nav className="menu">
                <a href="#sobre" className="topcis">Sobre</a>
                <a href="#certificados" className="topcis">Cursos</a>
                <a href="#projects" className="topcis">Projetos</a>
                <a href="#contatos" className="topcis">Contatos</a>
            </nav>
        </header>
    )
}