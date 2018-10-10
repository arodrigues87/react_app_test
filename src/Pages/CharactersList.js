import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom'

class CharactersList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:5000/api/caracters", 
        {
            mode:'cors',
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => { if (data) this.setState({ characters: data, isLoading: false }) })
            .catch(error => { console.log(error); this.setState({ error, isLoading: false }) });
    }

    render() {

        return (
            <div>
                <Header></Header>
                <Row>
                    <Col xs="2">
                        <Menu></Menu>
                    </Col>
                    <Col xs="10">

                        {/* <Row visible={!this.state.isLoading} >carregando</Row> */}
                        {

                            this.state.characters.map(character =>
                                <Row key={character.id}>
                                    <Col xs="2">
                                        <img src={character.urlImage} alt="" width="100px" height="100px" />
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>{character.name}</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Link to={`/character/id=${character.id}`}>Detalhes</Link>
                                                {/* <Link to="/character/id=" search={character.ID}>Detalhes</Link> */}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        }
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}

export default CharactersList;