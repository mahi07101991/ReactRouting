import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <h1>Navigation</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/component1">component1</NavLink>
                <NavLink to="/component2">component2</NavLink>
                <NavLink to={{
                    pathname: '/component3',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }}>component3</NavLink>
            </div>
        );
    }
}

export default Navigation;