import Buttom from './components/Buttom/buttom';
import Topo from './components/Topo/topo';
import Capa from './components/Capa/capa';
import Sobre from './components/Sobre/sobre';
import Cursos from './components/Cursos/cursos';
import Projetos from './components/Projetos/projetos';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className='geral'>
        <Buttom/>
       {/*  <Menu/> */}
        {/* <Topo/> */}
        <Capa/>
        <Sobre/>
        {/* <Cursos/> */}
        <Projetos/>
        <Footer/> 
    </div>
  );
}
export default App;
