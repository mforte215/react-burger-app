import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Toolbar/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: true,
    }

    SideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    SideDrawerOpenHandler = () => {
 
        this.setState((prevState) => {
           return{showSideDrawer: !prevState.showSideDrawer}
        }
        );
    }

    render() {
        return(
            <Aux>
            <Toolbar sideDrawerToggleClick={this.SideDrawerOpenHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
        );
    }

}

export default Layout;