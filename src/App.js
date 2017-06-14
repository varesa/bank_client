import React, { Component } from 'react';
import './App.css';

import {Container} from 'semantic-ui-react';

import Login from "./Login";
import AccountView from "./AccountView";
import Api from "./Api";

class App extends Component {
    constructor() {
        super();

        this.state = {
            authenticated: false
        };

        this.api = new Api();

        this.loginSuccessfulCallback = this.loginSuccessfulCallback.bind(this);
    }

    loginSuccessfulCallback() {
        this.setState({
            authenticated: true
        });
    }

    render() {

        let mainComponent;
        if(!this.state.authenticated) {
            mainComponent = <Login loginSuccessfulCallback={this.loginSuccessfulCallback} api={this.api} />;
        } else {
            mainComponent = <AccountView api={this.api} />;
        }

        return (
            <div className="App">
                <Container>
                    {mainComponent}
                </Container>
            </div>
        );
    }
}

export default App;
