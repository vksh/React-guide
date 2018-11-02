import React from 'react';
import './Toolbar.scss';
import Logo from '../../../shared/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerLogo from '../../../assets/images/burger-logo.png';
const toolbar = (props) => (
    <header className='toolbar'>
        <Logo logoUrl={BurgerLogo}
            logoClass='applogo'></Logo>
        <div className='menu-icon'><i className="material-icons"
            onClick={props.menuclicked}>{props.showCross ? 'close': 'menu'}</i></div>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;