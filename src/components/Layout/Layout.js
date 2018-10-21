import React from 'react';
import Aux from '../../hoc/Auxi';
import './Layout.scss';
const layout = (props) => (
    <Aux>
        <div>Toolbar SideDrawer, Backdrop</div>  
        <main className='content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;