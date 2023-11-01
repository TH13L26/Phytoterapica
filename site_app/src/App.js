import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Baner from './componentes/Baner';
import BanerDois from './componentes/BanerDois';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Acessorios from './componentes/OEssencial/Acessorios';
import Aromatizadores from './componentes/OEssencial/Aromatizadores';
import CNaturais from './componentes/OEssencial/CNaturais';
import HPessoal from './componentes/OEssencial/HPessoal';
import OEssenciais from './componentes/OEssencial/OEssenciais';
import OVegetais from './componentes/OEssencial/OVegetais';
import Sinergia from './componentes/OEssencial/Sinergia';
import Produtos from './componentes/Produtos';

function App() {
  return (
  
    <main>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Baner />} />
        <Route path='/' element={<Produtos />} />
        <Route path='/' element={<BanerDois />} />

        <Route path='/OEssenciais' element={<OEssenciais />} />
        <Route path='/OVegetais' element={<OVegetais />} />
        <Route path='/Sinergia' element={<Sinergia />} />
        <Route path='/CNaturais' element={<CNaturais />} />
        <Route path='/HPessoal' element={<HPessoal />} />
        <Route path='/Aromatizadores' element={<Aromatizadores />} />
        <Route path='/Acessorios' element={<Acessorios />} />

        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
