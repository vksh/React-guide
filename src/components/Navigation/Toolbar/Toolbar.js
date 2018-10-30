import React from 'react';
import './Toolbar.scss';
import Logo from '../../../shared/Logo/Logo';
import BurgerLogo from '../../../assets/images/burger-logo.png';
const toolbar = () => (
    <header className='toolbar'>
        <Logo logoUrl={BurgerLogo}
            logoClass='applogo'></Logo>
        <div>Menu</div>
        <nav>
            Navigation
        </nav>
    </header>
);

export default toolbar;