import React from 'react';
import './Logo.scss';
const logo = (props) => (
    <div className='logo'>
        <img src={props.logoUrl} className={props.logoClass} alt='No src available' />
    </div>
)

export default logo;