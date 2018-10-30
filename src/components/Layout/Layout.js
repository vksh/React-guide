import React from 'react';
import Aux from '../../hoc/Auxi';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main className='content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;