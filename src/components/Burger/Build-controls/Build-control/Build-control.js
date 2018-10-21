import React from 'react';
import './Build-control.scss';
const buildControl = (props) => (
    <div className='build-control'>
        <div className='label'>{props.label}</div>
        <button className='less' disabled={props.disabledInfo} onClick={() => props.update('remove')}>Less</button>
        <button className='more'  onClick={() => props.update('add')}>More</button>
    </div>
)

export default buildControl;