import React from 'react';
import './NavigationItem.scss';
import { NavLink } from 'react-router-dom';
const navigationItem = (props) => (
    <li className='navigationItem'>
        <NavLink exact to={props.link}>{props.children}</NavLink>
    </li>
);

export default navigationItem;