import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => (
    <nav>
        <ul>
            <Link to=''>
                <li>Home</li>
            </Link>
            <Link to='todos'>
                <li>todos</li>
            </Link>
        </ul>
    </nav>
);

export default Nav;