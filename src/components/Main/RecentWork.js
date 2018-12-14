import React from 'react';
import { Link } from 'react-router-dom';

const RecentWork = (props) => (
    <section className="mw7-ns mw6-m mw5 lh-copy center portfolio">
        <h2> Recent Work of { props.name } </h2>
        <ul className="bullet-list">
            <li><Link to="/recentwork" > Recent Work </Link></li>
        </ul>
    </section>
)

export default RecentWork;