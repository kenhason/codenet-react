import React, { Component } from 'react';

import './Navbar.css';
import LoginButton from '../FbLoginBtn/LoginButton';

class Navbar extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.isLoggedInFb)
    }

    login(response) {
        console.log('success');
    }

    onFailure(response) {
        console.log('fail');
    }

    onFinish(response) {
        console.log('finish');
    }

	render() {
		return(
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand menu-link">CodeNet</a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item  menu-link">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item  menu-link">
                            <a className="nav-link">Questions</a>
                        </li>
                        <li className="nav-item  menu-link">
                            <a className="nav-link">{this.props.isLoggedInFb}</a>
                        </li>
                    </ul>
                    <span className="navbar-text menu-link p-0" data-toggle="modal" data-target="#login-modal">
                        <LoginButton
                          width="250"
                          dataScope="public_profile,email"/>
                    </span>
                </div>
            </nav>
		);
	}
}

export default Navbar;
