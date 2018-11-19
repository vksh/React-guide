import React, { Component } from 'react';
import './Modal.scss';
import Aux from '../../hoc/Auxi';
import Backdrop from '../../shared/Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show}
                    click={this.props.modalClose}></Backdrop>
                <div className={'custom-modal' + (this.props.show ? ' showModal' : '')}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;