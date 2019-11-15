//imports
import React, { Component } from "react";
import "./UpForm.css";
import { selectSong } from "../actions";
import { connect} from 'react-redux';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'
import { deleteRow } from "../actions";
import { submitForm } from "../actions";


class UpForm extends Component {

  constructor(props) {
    super(props)
    this.state = { rest: "null",username: "",password: "",email: "",phone: 0}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    // console.log("upform contructor is called")
    console.log(this.props)

}
componentDidMount() {
  console.log("upform componentdidmount is called");
  // this.setState({st:this.props.deletedRow})

}

componentDidUpdate(){
  console.log("upform componentdidupdate is called");
}

async handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target)
    let DATA = event.target.childNodes
    await this.setState({
        username:DATA[0].value,
        password:DATA[1].value,
        email:DATA[2].value,
        phone:DATA[3].value
    });

    // console.log(this.state.rest)

    fetch('http://localhost:5000/upform', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
    }).then(async response => {
              await response.json().then(message => {
                
              // this.props.onsubmit(message.state)
              console.log('message is this:'+ message.state)
              if(message.state===true){
                 this.props.submitForm(message.state)
              }
            })
        })
    // console.log("after fetch")
}
  
  deleteRow(){
    // console.log("delete of this ",this)
    fetch('http://localhost:5000/delform1', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({selectedRow :this.props.selectedRow})
  }).then(response=>{
    response.json().then(item=>{
        // console.log(item.message)
        this.props.deleteRow(item.message)
    })
  })
 
}
  
  render() {
    console.log("render of upform")
      return (
        <div className="formclass fadeInDown">
                  <div id="formContent">
                      {/* {this.props.selectedRow} */}
                      {/* <!-- Icon --> */}

                      <div className="fadeIn first">
                          <img src="" id="icon" alt="User Icon" />
                      </div>
  
                      <form onSubmit={this.handleSubmit}>
                          <input type="text" id="username" className="fadeIn second" name="username" placeholder="username" />
                          <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
                          <input type="text" id="email" className="fadeIn third" name="email" placeholder="email"  />
                          <input type="Number" id="phone" className="fadeIn third" name="phone" placeholder="phone" />
                          <input type="submit" className="fadeIn fourth" value="Add" />
                      </form>
                      <input type="submit" className="fadeIn fourth" value="Delete" onClick={this.deleteRow} />                    
                  </div>
              </div >
      );
    }
  }
  const mapStateToProps = (state)=>{
    // console.log(use + when primitive and when object use , )
    // console.log("upform mapstatetoprops ",state)
    return {
      selectedRow:state.selectedRow,
      deletedRow:state.deletedRow,
      submitForm:state.submitForm
    }
  };

export default connect(mapStateToProps,{deleteRow:deleteRow,submitForm:submitForm})(UpForm);
