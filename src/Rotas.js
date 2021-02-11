import { Switch, Route } from 'react-router-dom';


import  Home from './Pages/Home';
import Contatos from './Pages/Contatos';
import Pedidos from './Pages/Pedidos';



function Rotas() {
    return(
        <Switch>

         <Route exact path="/" component={ Home } />  
         <Route exact path="/contatos" component={ Contatos } /> 
         <Route exact path="/pedidos" component={ Pedidos } />         
            
        </Switch>
    );
}

export default Rotas;