import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <img src="https://ambrosia.com.br/wp-content/uploads/2016/01/marvel.jpeg" 
                        alt="" width="100%" height="400px" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;