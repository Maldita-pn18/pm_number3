import React, { Component } from "react";
import Dashboard from "./dashboard.js";
import ReactDOM from 'react-dom';

class Pm_number3 extends Component {
    state = {
        username: "",
        password: "",
        credential_username: "test",
        credential_password: "123456"
    };
    handleSubmit = async (event) => {
        // event.preventDefault();
        this.setState({ username: '' });
        this.setState({ password: '' });
    };
     getUsername (){
        return(this.state.credential_username)
    }
    checkCredential = () => {
        if (this.state.username === this.state.credential_username && this.state.password === this.state.credential_password) {
            ReactDOM.render(<Dashboard />, document.getElementById('root'));
        } else {
            alert("Invalid Credential")
        }

    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text" value={this.state.username}
                        onChange={event => this.setState({ username: event.target.value })}
                        name="username"
                        placeholder="username"
                        required
                    />
                    <input
                        type="text" value={this.state.password}
                        onChange={event => this.setState({ password: event.target.value })}
                        name="password"
                        placeholder="password"
                        required
                    />
                    <button onClick={this.checkCredential}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Pm_number3;