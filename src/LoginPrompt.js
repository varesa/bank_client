import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';


class LoginPrompt extends Component {
    constructor() {
        super();

        this.state = {
            account: "",
            pass: "",
        };

        this.authenticate = this.authenticate.bind(this);
        this.updateValues = this.updateValues.bind(this);
        this.loginCallback = this.loginCallback.bind(this);
    }

    loginCallback(result) {
        if(result.success) {
            this.props.loginSuccessful();
        } else {
            console.log("login error");
        }
    }

    authenticate(e) {
        this.props.api.authenticate(this.state.account, this.state.pass, this.loginCallback);
        e.preventDefault();
    }

    updateValues(e) {
        let state = this.state;
        switch(e.target.name) {
            case "account":
                state.account = e.target.value;
                break;
            case "pass":
                state.pass = e.target.value;
                break;
            default:
                break;
        }

        this.setState(state);
    }

    render() {
        return (
            <div className="LoginPrompt">
                <p className="App-intro">
                    <br/>
                    Please log in <a onClick={this.props.switchMode}>or register</a>
                </p>
                <Form>
                <Form.Group widths="equal">
                        <Form.Input name="account" label="Account name" onChange={this.updateValues} />
                        <Form.Input name="pass"    label="Password"     onChange={this.updateValues} type="password"/>
                </Form.Group>
                    <Form.Button fluid={true} onClick={this.authenticate}> Login </Form.Button>
                </Form>
            </div>
        );
    }
}

export default LoginPrompt;
