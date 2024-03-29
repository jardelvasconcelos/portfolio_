
import './projetos.css';
import Card from './cardProject.js';

export default function Projetos() {
   return (
      <section className=" tela_projetos sections color-6" id="projects">
         <h1 className='content_title'>Alguns Projetos</h1>
         <div className="my-projects">
            <Card
               icon="assets/img/projetos/logo.png" alt=""
               titulo='Clinica Médica'
               gitHub='https://github.com/jardelvasconcelos/projeto_clinica_medica.git'
               deploy='https://jardelvasconcelos.github.io/projeto_clinica_medica/index.html'
            />
            <Card
               icon="assets/img/projetos/manual_.png" alt=""
               titulo='Manual Técnico'
               gitHub='https://github.com/jardelvasconcelos/consult_.git'
               deploy='https://jardelvasconcelos.github.io/consult_/'
            />
            <Card
               icon="assets/img/projetos/fundo_preto.jpg" alt=""
               titulo='LandPage Systech'
               gitHub='https://github.com/jardelvasconcelos/systech.git'
               deploy='https://systech-eight.vercel.app/'
            />
            <Card
               icon="assets/img/projetos/sorveteria.png" alt=""
               titulo='Sorveteria'
               gitHub='https://github.com/jardelvasconcelos/sorveteria.git'
               deploy='https://sorveteria-pi.vercel.app/'
            />
         </div>
      </section>
   )
}