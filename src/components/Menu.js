import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>
                <Link to="/test1">Teste 1</Link>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Header;