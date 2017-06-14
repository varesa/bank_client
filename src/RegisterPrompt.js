import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';


class RegisterPrompt extends Component {
    constructor() {
        super();

        this.state = {
            account: "",
            pass1: "",
            pass2: "",
            pass_ok: false
        };

        this.register = this.register.bind(this);
        this.updateValues = this.updateValues.bind(this);
    }

    register(e) {
        if(this.state.pass_ok) {
            this.props.api.register(this.state.account, this.state.pass1);
        }
        e.preventDefault();
    }

    updateValues(e) {
        let state = this.state;
        switch(e.target.name) {
            case "account":
                state.account = e.target.value;
                break;
            case "pass1":
                state.pass1 = e.target.value;
                break;
            case "pass2":
                state.pass2 = e.target.value;
                break;
            default:
                break;
        }

        state.pass_ok = (state.pass1.length > 0 && state.pass1 === state.pass2);

        this.setState(state);
    }

    render() {

        let msg = "";
        if(this.state.pass1.length === 0) {
            msg = "Password too short";
        } else if(!this.state.pass_ok) {
            msg = "Passwords do not match";
        } else {
            msg = "Register"
        }

        return (
            <div className="RegisterPrompt">
                <p className="App-intro">
                    <br/>
                    Please create an account <a onClick={this.props.switchMode}>or log in</a>
                </p>

                <Form>
                    <Form.Input name="account" label="Account name"    onChange={this.updateValues} />
                    <Form.Input name="pass1"   label="Password"        type="password" onChange={this.updateValues} />
                    <Form.Input name="pass2"   label="Verify password" type="password" onChange={this.updateValues} />
                    <Form.Button disabled={!this.state.pass_ok} fluid={true} onClick={this.register}> {msg} </Form.Button>
                </Form>
            </div>
        );
    }
}

export default RegisterPrompt;
