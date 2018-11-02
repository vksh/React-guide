import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    render() {
        return (
            <Aux>
                <Toolbar
                    menuclicked={this.toggleSideDrawer}
                    showCross={this.state.showSideDrawer}></Toolbar>
                <SideDrawer
                    handler={this.toggleSideDrawer}
                    show={this.state.showSideDrawer}></SideDrawer>
                <main className='content'>
                    {this.props.children}
                </main>
            </Aux >
        )
    }
    toggleSideDrawer = () => {
        let sideDrawerState = this.state.showSideDrawer;
        sideDrawerState = !sideDrawerState;
        this.setState({ showSideDrawer: sideDrawerState })

    }
}

export default Layout;