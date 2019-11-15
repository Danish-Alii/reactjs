//imports
import React, { Component } from 'react';
import './Signin.css'

import { Redirect, Link } from 'react-router-dom'

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = { rest: null, message: '', status: false }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const fdata = new FormData(event.target);

        await this.setState({
            rest: stringifyFormData(fdata)
        });

        console.log(this.state.rest)

        await fetch('http://localhost:5000/sigin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: this.state.rest
        }).then(response => {
            response.json().then(msg => {
                if (!msg.state) {
                    this.setState({ message: msg.message })
                } else {
                    setTimeout(() => {
                        this.setState({ status: true })
                    }, 1000);
                    this.setState({ message: msg.message })
                }
            })

        })
        console.log("after fetch")
    }


    render() {
        return (
            <div className="wrapper " >

                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                        <img src="" id="icon" alt="User Icon" />
                        {this.state.status === false ? <div className="alert alert-danger" style={{ maxWidth: "300px", margin: "auto" }} role="alert">{this.state.message}</div> : <Redirect to="/update" />}

                        <div>
                            <Link style={{ display: "inline-block" }} to="/" className="sub nav-link fadeIn first">
                                Sign Up
                                </Link>
                            <Link style={{ display: "inline-block" }} to="/signin" className="sub nav-link fadeIn first">
                                Sign In
                                </Link>
                        </div>
                    </div>

                    {/* <!-- ignin Form --> */}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="username" className="fadeIn second" name="username" placeholder="username" />
                        <input type="password" id="password" className="fadeIn second" name="password" placeholder="password" />
                        <input type="submit" className="fadeIn third" value="Sign In" />
                    </form>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <Link className="underlineHover" to="/ftr" >Forgot Password?</Link>
                    </div>

                </div>
            </div>
        )
    }

}

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

export default Signin;



