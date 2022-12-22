import './sobre.css';

export default function Sobre(){
    return(
        <section className=" tela_sobre section_sobre color-5" id="sobre">
            <div className="content_home_content_">
                <h1 className="content_title">Um pouco sobre mim ...</h1>
                <p className="content_description ">Técnico em Eletrônica, formado em
                    Desenvolvimento de Sistemas e atualmente cursando Engenharia de Software, sou uma pessoa sedenta por
                    conhecimento e
                    tecnologias. Gosto muito de
                    compartilhar idéias e ser um pouco diferente do normal. Busco sempre aprender e
                    compartilhar conhecimentos com as pessoas em minha volta.
                </p>
            </div>
            <div className="person">
                <img className="image_perfil_ " src="assets/img/home/imageperfil.png" alt=""/>
            </div>
        </section>
    )
}