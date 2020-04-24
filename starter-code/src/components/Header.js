import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/'><img src='images/HomeImage.png' className="homeImage"/></Link>
            </div>
        );
    }
}

export default Header;