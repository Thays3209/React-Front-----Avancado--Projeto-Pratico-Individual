import { Navbar, Nav } from 'react-bootstrap';
import Logo2 from '../../IMG/Logo.png';

import './Menu.css' 
import { Link, withRouter } from 'react-router-dom';

 function baseMenu(props) {
    const { location } = props
    return (

        <Navbar className="navbar-dark pb-0" expand="lg" fixed="top" >
            <Nav.Item >
               <Nav.Link as= {Link} href="/" to="/"><img className="navbar-brand" src={Logo2} /></Nav.Link>
            </Nav.Item >
                <Navbar.Toggle aria-controls="itens-Menu" />
                <Navbar.Collapse id="itens-Menu">
                    <Nav activeKey={location.pathname} className="ml-auto mr-3">

                        <Nav.Item>
                            <Nav.Link as= {Link} href="/" to="/">Página Inicial</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as= {Link}  href="/Contatos" to="/Contatos">Contatos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as= {Link}  href="/Pedidos" to="/Pedidos">Pedidos</Nav.Link>
                        </Nav.Item>               
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }


const Menu = withRouter(baseMenu);


export default Menu;