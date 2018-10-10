import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom'

class Character extends Component {


    constructor(props) {
        super(props);

        this.state = {
            idCharacter: props.id,
            character: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        let url = "https://gateway.marvel.com:443/v1/public/characters?apikey=" + this.state.idCharacter;
        fetch(url)
            .then(response => response.json())
            .then(data => { if (data && data.character) this.setState({ character: data.character, isLoading: false }) })
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

                        info
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}

export default Character;