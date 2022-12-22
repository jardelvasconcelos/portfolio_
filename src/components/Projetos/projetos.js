
import './projetos.css';

export default function Projetos() {
   return (
      <section className=" tela_projetos sections color-6" id="projects">
            <h1>Projetos</h1>
            <div className="my-projects">
             <a href="">
                 <div className="projects_container color-6">
                    <img className="image_projects" src="assets/img/cursos_formacao/logo_react.png" alt="" />
                    <p className="coment_projects">Clinica Médica</p>
                 </div>
             </a> 
             <div className="projects_container color-6">
                <img className="image_projects" src="assets/img/cursos_formacao/logo_react.png" alt="" />
                <p className="coment_projects">História do Flamengo</p>
             </div> 
             <div className="projects_container color-6">
                <img className="image_projects" src="assets/img/cursos_formacao/logo_react.png" alt="" />
                <p className="coment_projects">Controle de Manutanção</p>
             </div> 
             <div className="projects_container color-6">
                <img className="image_projects" src="assets/img/cursos_formacao/logo_react.png" alt="" />
                <p className="coment_projects">Conversor de Medidas</p>
             </div> 
               
            </div>
        </section>
   )
}