import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Modal from '../../shared/Modal/Modal';
import axios from '../../axios-orders';
const errorHandler = (WrappedComponent) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.response.use(null, error => {
                this.setState({ error: error })
            })
            this.resInterceptor = axios.interceptors.request.use(null, error => {
                this.setState({ error: null })
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        render() {
            return (<Aux>
                <Modal show={this.state.error}
                    modalClose={this.clearError}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux >
            )
        }
        clearError = () => {
            this.setState({ error: null })
        }
    }
}
export default errorHandler;