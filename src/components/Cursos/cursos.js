import './cursos.css';

export default function Cursos() {
    return (
        <section className=" tela_cursos sections color-6" id="certificados">
            <h1 id="certificados" className="subtitle">Cursos</h1>
            <div className="cursos_flex_container color-6">
                <div className="cursos_container">
                    <img className="logo_cursos" src="assets/img/cursos_formacao/logo_html.png" alt="" />
                    <ul className="container_know">
                        <li className="cursos_coment">Introdução</li>
                        <li className="cursos_coment">Tags Básicas</li>
                        <li className="cursos_coment">Meta Tags</li>
                        <li className="cursos_coment">Listas</li>
                        <li className="cursos_coment">Tabelas</li>
                        <li className="cursos_coment">HTML Semantico</li>
                        <li className="cursos_coment">Formulários</li>
                    </ul>
                </div>
                <div className="cursos_container">
                    <img className="logo_cursos" src="assets/img/cursos_formacao/logo_css.png" alt="" />
                    <ul className="container_know">
                        <li className="cursos_coment">Introdução</li>
                        <li className="cursos_coment">Propriedades</li>
                        <li className="cursos_coment">Seletores</li>
                        <li className="cursos_coment">Background</li>
                        <li className="cursos_coment">Caixas (Box Model)</li>
                        <li className="cursos_coment">Posicionamento</li>
                        <li className="cursos_coment">Flexbox</li>
                        <li className="cursos_coment">Pseudo-classNamees</li>
                        <li className="cursos_coment"> Pseudo-elementos</li>
                        <li className="cursos_coment">Media Queries</li>
                    </ul>
                </div>
                <div className="cursos_container">
                    <img className="logo_cursos" src="assets/img/cursos_formacao/logo_js.png" alt="" />
                    <ul className="container_know">
                        <li className="cursos_coment">Introdução</li>
                        <li className="cursos_coment">Variáveis e operadores</li>
                        <li className="cursos_coment">Objetos</li>
                        <li className="cursos_coment"> Estruturas condicionais</li>
                        <li className="cursos_coment">Inputs</li>
                        <li className="cursos_coment">Array</li>
                        <li className="cursos_coment">Estruturas de repetição</li>
                        <li className="cursos_coment">Manipulação de
                            Strings e Datas</li>
                            <li className="cursos_coment"> Funções</li>
                    </ul>
                </div>
               {/*  <!-- <div className="cursos_container">
                    <img className="logo_cursos" src="assets/img/cursos_formacao/logo_react.png" alt="" />
                    <ul className="container_know">
                        <li className="cursos_coment">Introdução</li>
                        <li className="cursos_coment">Tags Básicas</li>
                        <li className="cursos_coment">Meta Tags</li>
                        <li className="cursos_coment">Listas</li>
                        <li className="cursos_coment">Tabelas</li>
                        <li className="cursos_coment">HTML Semantico</li>
                        <li className="cursos_coment">Formulários</li>
                    </ul>
                </div> --> */}
                <div className="cursos_container">
                    <img className="logo_cursos" src="assets/img/cursos_formacao/logo_git.png" alt="" />
                    <ul className="container_know">
                        <li className="cursos_coment">Introdução</li>
                        <li className="cursos_coment">Principais comandos</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}