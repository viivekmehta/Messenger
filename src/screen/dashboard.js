import React, { Component } from 'react';
class DashBoard extends Component {

    constructor() {
        super();
        this.state = {
            keynames: [],
            valueSelected: "",
            showTextArea: false,
            sentMessage: "",
            c1values: "",
            c11values: "",
            c2values: "",
            sender: "",
            cr: "",
            showResult: ""
        }
         this.handleSelected = this.handleSelected.bind(this);
         this.sentMessage = this.sentMessage.bind(this);
    }

    handleSelected = (e) => {
        this.setState({
            valueSelected: e.target.value,
            showTextArea: true
        });

        localStorage.setItem("receiver", e.target.value);
    }

    sentMessage(e) {
        var cu = localStorage.getItem("receiver");
        var senderkey = localStorage.getItem("currentuser");
        let c1values = JSON.parse(localStorage.getItem(senderkey));
        let c2values = JSON.parse(localStorage.getItem(cu));
        this.setState({ c1values });
        this.setState({ c2values });
        this.setState({ sender: c1values.first });
        this.setState({ sentMessage: e.target.value }, () => { console.log(this.state.sentMessage) });
    }



    componentDidMount() {
        var crntkey;
        let keyParam = [];
        for (var i = 0; i < localStorage.length; i++) {
            crntkey = localStorage.key(i);
            if (crntkey !== "currentuser") {
                keyParam.push(crntkey);
            }

        }
        this.setState({ keynames: keyParam });
        var sndr = localStorage.getItem("currentuser");
        this.setState({ sender: sndr });
    }

    submitt = () => {
        var cd = localStorage.getItem("receiver");
        let c11values = JSON.parse(localStorage.getItem(cd));
        this.setState({ c11values });
        c11values.messages += this.state.sender + " sent : " + this.state.sentMessage + " . ";
        localStorage.setItem(cd, JSON.stringify(c11values));
        alert("Message sent !!");
        window.location.href = "/dashboard";
    }

    doLogout() {
        localStorage.setItem("currentuser", "null");
        window.location.href = "/home";
    }

    submitt2 = () => {
        window.location.href = "/home";
    }

    render() {


        let { keynames } = this.state;
        console.log(this.state.sender)

        if (this.state.showTextArea) {
            return (
                <div>
                    <center><br /><br /><br /><br />
                        <table border="2">
                            <tr>
                                <td>
                                    <center>
                                        <textarea placeholder="Type here!!" onChange={this.sentMessage}></textarea><br />
                                        <input type="button" value="Send" onClick={this.submitt} />
                                        <input type="button" value="Go to Home" onClick={this.submitt2} />
                                        <input type="button" value="Logout" onClick={this.doLogout} /> <br />
                                    </center>
                                </td>
                            </tr>
                        </table>
                    </center>
                </div>
            );
        }

        return (
            <div>
                <center>
                    <br /><br /><br /><br />
                    <table border="2">
                        <tr>
                            <td>
                                <center>

                                    <h2>Please Select the recipient  </h2>
                                    <select onChange={this.handleSelected} name="valueSelected" >
                                        <option selected > Select the user </option>
                                        {
                                            keynames.map((kn) => {

                                                // let showResult = ((kn === this.state.sender) || (kn === "receiver")) ? false : true;
                                                // this.setState({ showResult });

                                                if (kn === this.state.sender || kn === 'receiver') {
                                                    return (
                                                        <div></div>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <React.Fragment>
                                                            <option>{kn}</option>

                                                        </React.Fragment>)
                                                }
                                            })
                                        }

                                    </select>
                                    <br />
                                    <input type="button" value="Logout" onClick={this.doLogout} /></center>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>
        );
    }
}
export default DashBoard;
