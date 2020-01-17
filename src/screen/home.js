import React, { Component } from 'react';
import { Link } from 'react-router';
import { history } from '../helper';
import './home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: "",
                pass: ""
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        var logout;
        var keyy;
        for (var i = 0; i < localStorage.length; i++) {
            keyy = localStorage.key(i);
            if (keyy === "currentuser") {
                logout = localStorage.getItem("currentuser");
                if (logout !== "null") {
                    window.location.href = "/login";
                }
            }
        }
    }

    handleChange(e) {
        let user = Object.assign({}, this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    handleSubmit(e) {
        e.preventDefault();
        var value = localStorage.getItem(this.state.user.id);
        if (value != null) {
            value = JSON.parse(value);
            if (this.state.user.id === value.email && this.state.user.pass === value.password) {
                localStorage.setItem("currentuser", this.state.user.id);
                window.location.href = "/login";
            }
            else {
                alert("Wrong Email Id and Password !! Please enter again!!");
                window.location.href = "/home";
            }
        }
        else {
            alert("Wrong Email Id and Password !! Please enter again!!");
            window.location.href = "/home";
        }
    }

    render() {
        return (
            <div className="d1">
                <form onSubmit={this.handleSubmit}>
                    <div className="d11">
                        <div className="d111"> </div>
                        <div className="d112">
                            <div className="d1121">
                                <div className="d11211">
                                    <input type="text" name="id" value={this.state.id} placeholder="UserId" onChange={this.handleChange} />
                                </div>
                                <div className="d11212">
                                    <input type="text" name="pass" value={this.state.pass} placeholder="Password" onChange={this.handleChange} />
                                </div>
                                <div className="d11213">
                                    <input type="submit" value="Login" />
                                </div>
                            </div>
                            <div className="d1122">
                                <center>New User? <Link to={"/signup"}> Sign up</Link></center>
                            </div>
                        </div>
                    </div>
                    <div className="d12">

                    </div>
                    <div className="d13">

                    </div>
                </form>
            </div>
        );
    }
}
export default Home;
