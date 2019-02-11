import React from 'react';
import Link from 'react-router-dom';
import { ReactComponent } from '*.svg';

const Portfolio = (props) => (
    <section className="mw7-ns mw6-m mw5 lh-copy center portfolio">
    <h2> Portfolio of {props.name} </h2>
    <ul className="bullet-list">
        <li><Link to="/portfolio"></Link></li>
        <li><Link to="//behance.net/steinrock" target="_blank" rel="noopener noreferrer"> Behance </Link>This uses Behance API</li>
    </ul>
    </section>
)

export default Portfolio;