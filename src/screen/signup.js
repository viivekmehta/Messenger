import React, { Component } from 'react';
import { history } from '../helper';
import './home.css';

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                first: '',
                last: '',
                email: '',
                password: '',
                gender: '',
                userType: '',
                vehicle: '',
                messages: ""
            },
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem(this.state.formData.email, JSON.stringify(this.state.formData));
        history.push('/home');
        window.location.reload();
    }

    handleInputChange(e) {
        let formData = Object.assign({}, this.state.formData);
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    }

    render() {

        return (
            <div className="signupcolor">
                <br /><br /><center>                <table className="tablecolor" border="2"> <tr>       <td>      <center> <h1>SIGN UP</h1></center><br /><br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            First Name : &nbsp;
                        <input type="text" value={this.state.first} name="first" onChange={this.handleInputChange} />
                        </label><br /><br />
                        <label>
                            Last Name : &nbsp;
                        <input type="text" value={this.state.second} name="last" onChange={this.handleInputChange} />
                        </label><br /><br />
                        <label>
                            Email        : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} />
                        </label><br /><br />
                        <label>
                            Password : &nbsp;
                        <input type="password" value={this.state.pass} name="password" onChange={this.handleInputChange} />
                        </label><br /><br />
                        <label> Department</label>
                        <br />
                        <select
                            name="userType"
                            onChange={this.handleInputChange}>
                            <option value={"Business"}>Business</option>
                            <option value={"Management"}>Management</option>
                            <option value={"Engineer"}>Engineer</option>
                            <option value={"Service"}>Service</option>
                        </select>
                        <br />

                        <label> Gender</label>
                        <br />
                        <input type="radio" name="gender" value="male" onChange={this.handleInputChange} /> Male<br />
                        <input type="radio" name="gender" value="female" onChange={this.handleInputChange} /> Female<br />

                        <label> Vehicle Info</label>
                        <br />
                        <input type="checkbox" name="vehicle" value="Bike" onChange={this.handleInputChange} /> I have a bike<br />
                        <input type="checkbox" name="vehicle" value="Car" onChange={this.handleInputChange} /> I have a car<br />
                        <center><input type="submit" value="Submit" /> </center>
                    </form>
                </td>
                </tr>
                </table>
                </center>

            </div>
        );
    }
}

export default Signup;