import React from 'react';
import './Modal.scss';
import Aux from '../../hoc/Auxi';
import Backdrop from '../../shared/Backdrop/Backdrop';
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show}
            click={props.modalClose}></Backdrop>
        <div className={'custom-modal' + (props.show ? ' showModal' : '')}>
            {props.children}
        </div>
    </Aux>
)

export default modal;