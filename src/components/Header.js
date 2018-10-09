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
                    <Col xs="2">
                        <img src={require("../logo.svg")} alt="" />
                    </Col>
                    <Col xs="10">
                        header content
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;