import React, { Component } from 'react';
import './home.css';
class Login extends Component {

    constructor() {
        super();
        this.state = {
            currentValues: "",
            crntmsg: "",
        }
    }

    componentDidMount() {
        var values = localStorage.getItem("currentuser");
        let currentValues = localStorage.getItem(values);
        currentValues = JSON.parse(currentValues);
        this.setState({ currentValues });
        let crntmsg = currentValues.messages;
        this.setState({ crntmsg });
    }

    sendMessage() {
        window.location.href = "/dashboard";
    }

    doLogout() {
        localStorage.setItem("currentuser", "null");
        window.location.href = "/home";
    }

    render() {
        // Sat current state to local storage
        //  localStorage.setItem('currentValues', JSON.stringify(this.state.currentValues));
        return (
            <div className="loginbg">
                <h1>Hello {this.state.currentValues.first} !! </h1>
                <center>
                    <table border="2">
                        <tr>
                            <td>
                                <center><h2>Your Details </h2></center><br />
                                <center>
                                    <table border="2">
                                        <tr>
                                            <th>Full Name : {this.state.currentValues.first} {this.state.currentValues.last}</th>
                                        </tr>
                                        <tr>
                                            <th> Gender : {this.state.currentValues.gender} </th>
                                        </tr>
                                        <tr>
                                            <th> User Type : {this.state.currentValues.userType} </th>
                                        </tr>
                                        <tr>
                                            <th> Vehicle : {this.state.currentValues.vehicle} </th>
                                        </tr>
                                    </table>
                                    <br />
                                    <input type="button" value="Send New Message" onClick={this.sendMessage} />
                                    <input type="button" value="Logout" onClick={this.doLogout} /><br />
                                    <br />
                                </center>
                            </td>
                        </tr>
                    </table> </center><br />
                <center>
                    <table border="2">
                        <tr>
                            <td>
                                <center><h2> Your current messages are </h2></center><br />
                                <p>{this.state.crntmsg}</p>
                            </td>
                        </tr>
                    </table>
                </center>

            </div>
        );
    }
}
export default Login;
