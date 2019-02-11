import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const headerImage = require('../../images/template/banner-area-bg.jpg')

class Header extends Component {
    render() {
        const headerStyle = {
            backgroundImage: 'url(' + headerImage + ')',
            height: '550px',
            width: 'auto',
            
            
        
        }
        // const textStyle = {
        //     padding: '350px',
        // }
    return(
        <header className="h5-ns h5" style={headerStyle}>
            <div className="header-container">
                <div className="dt h-100 text-center">
                <div></div>
                    <div className="white dtc v-mid h-100">
                    <Link to="/">
                        <h1><span>F</span>errentino &<span> A</span>ssociates </h1>
                        <h2 className="serif"> CRIMINAL DEFENSE ATTORNEY</h2>
                        <h3 className="serif"> Orange County</h3>
                        <h4> (714) 973-2024</h4>
                    </Link>
                    </div>
                </div>
            </div>
        </header>
    )
    }
}

export default Header;