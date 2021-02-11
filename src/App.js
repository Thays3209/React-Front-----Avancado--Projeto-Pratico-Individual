import {lazy, Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Estilo/Style.css';


const Rotas = lazy(() => import('./Rotas'));
const Footer = lazy(() => import('./CodeSplitting/Footer/Footer'));
const Menu = lazy(() => import('./CodeSplitting/Menu/Menu'));

//import Rotas from './Rotas';
//import Footer from './CodeSplitting/Footer/Footer';
//import Menu from './CodeSplitting/Menu/Menu';


function App() {
  return (
  <BrowserRouter>
    <div className="App">

      <header>
      <Suspense fallback = { <p>Carrregando...</p>}>
      <Menu/>
      </Suspense>
       
      </header>

      <main>

        <Container fluid>
        <Suspense fallback = { <p>Carrregando...</p>}>
        <Rotas/> 
        </Suspense>
       </Container>

      </main>

         <Suspense fallback = { <p>Carrregando...</p>}>
         <Footer />
        </Suspense>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
