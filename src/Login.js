import React, { Component } from 'react';
import logo from './logo.svg';
import RegisterPrompt from "./RegisterPrompt";
import LoginPrompt from "./LoginPrompt";


class Login extends Component {
    constructor() {
        super();

        this.state = {
            registration: false
        };

        this.switchModeCallback = this.switchModeCallback.bind(this);
    }

    switchModeCallback() {
        let state = this.state;
        state.registration = !this.state.registration;
        this.setState(state);
    }

    render() {
        var mainComponent;
        if(this.state.registration) {
            mainComponent = <RegisterPrompt switchMode={this.switchModeCallback}  api={this.props.api} />;
        } else {
            mainComponent = <LoginPrompt switchMode={this.switchModeCallback} loginSuccessful={this.props.loginSuccessfulCallback} api={this.props.api} />;
        }

        return (
            <div className="Login">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                {mainComponent}

            </div>
        );
    }
}

export default Login;
