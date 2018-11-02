import React from 'react';
import './SideDrawer.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../shared/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi';
const sideDrawer = (props) => {
    return props.show ? (
        <Aux>
            <Backdrop show
                click={props.handler}></Backdrop>
            <div className='sideDrawer'>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    ) : null;
};

export default sideDrawer;