import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

class App extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <Row>
                    <Col xs="2">
                        <Menu></Menu>
                    </Col>
                    <Col xs="10">conteudo pagina inicial</Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;