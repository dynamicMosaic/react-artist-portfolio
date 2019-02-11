import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => (
    <section className="mw7-ns mw6-m mw5 lh-copy center">
        <h2> Results </h2>
        <ul className="bullet-list">
            <li><Link to="/results" > Results </Link></li>
        </ul>
    </section>
)

export default Results;