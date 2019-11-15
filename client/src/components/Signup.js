//imports
import React, { Component } from 'react';
import './Signup.css'

import { Link } from 'react-router-dom'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = { rest: null }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const fdata = new FormData(event.target);

        await this.setState({
            rest: stringifyFormData(fdata)
        });

        console.log(this.state.rest)

        await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: this.state.rest
        }).catch(error => {
            console.error('Error:', error)
        });
        console.log("after fetch")
    }



    render() {
        return (
            <div className="wrapper">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                        <img src="" id="icon" alt="User Icon" />
                        <div>
                            <Link style={{ display: "inline-block" }} to="/" className="sub nav-link fadeIn first">
                                Sign Up
                            </Link>
                            <Link style={{ display: "inline-block" }} to="/signin" className="sub nav-link fadeIn first">
                                Sign In
                            </Link>
                        </div>
                    </div>

                    {/* <!-- Login Form --> */}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="username" className="fadeIn second" name="username" placeholder="username" />
                        <input type="password" id="password" className="fadeIn second" name="password" placeholder="password" />
                        <input type="text" id="email" className="fadeIn third" name="email" placeholder="email" />
                        <input type="Number" id="phone" className="fadeIn third" name="phone" placeholder="phone" />
                        <input type="text" id="address" className="fadeIn third" name="address" placeholder="address" />
                        <input type="submit" className="fadeIn third" value="Sign Up" />
                    </form>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <Link className="underlineHover" to="/ftr" >Forgot Password?</Link>
                    </div>

                </div>
            </div >
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

export default Signup;



