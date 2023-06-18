
import './projetos.css';
import Card from './cardProject.js';

export default function Projetos() {
   return (
      <section className=" tela_projetos sections color-6" id="projects">
         <h1>Alguns Projetos</h1>
         <div className="my-projects">
            <Card
               icon="assets/img/cursos_formacao/logo_react.png" alt=""
               titulo='Cadastro de Equipamentos'
               gitHub='https://github.com/jardelvasconcelos/portfolio_'
               deploy='https://github.com/jardelvasconcelos/portfolio_'
            />
            <Card
               icon="assets/img/cursos_formacao/logo_react.png" alt=""
               titulo='Manual Técnico'
               gitHub='https://github.com/jardelvasconcelos/portfolio_'
               deploy='https://github.com/jardelvasconcelos/portfolio_'
            />
            <Card
               icon="assets/img/cursos_formacao/logo_react.png" alt=""
               titulo='LandPage Ótica'
               gitHub='https://github.com/jardelvasconcelos/portfolio_'
               deploy='https://github.com/jardelvasconcelos/portfolio_'
            />
            <Card
               icon="assets/img/cursos_formacao/logo_react.png" alt=""
               titulo='Clube Estatistica'
               gitHub='https://github.com/jardelvasconcelos/portfolio_'
               deploy='https://github.com/jardelvasconcelos/portfolio_'
            />
         </div>
      </section>
   )
}