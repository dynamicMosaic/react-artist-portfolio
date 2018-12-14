import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const headerImage = require('../../images/template/pecheHeader.jpg')

class Header extends Component {
    render() {
        const headerStyle = {
            backgroundImage: 'url(' + headerImage + ')'
        }
    return(
        <header className="h5-ns h5" style={headerStyle}>
            <div className="header-container">
                <div className="dt h-100 text-center">
                    <div className="white dtc v-mid h-100">
                    <Link to="/">
                        <h1><span>P</span>eche <span>B</span>arones </h1>
                        <h2 className="serif"> Tattoo Artist | Clothing Design | Illustrator</h2>
                        <h3 className="serif"> Santa Fe, Argentina</h3>
                        <h4> { this.props.title }</h4>
                    </Link>
                    </div>
                </div>
            </div>
        </header>
    )
    }
}

export default Header;