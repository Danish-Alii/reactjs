//imports
import React, { Component } from "react";
import "./UpForm.css";
import { selectSong } from "../../actions";
import { connect} from 'react-redux';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'
import { deleteRow } from "../../actions";
import { submitForm } from "../../actions";
// import { selectRow } from "../actions";
import { edit1Row } from "../../actions";
import Update from "../Update/Update";

class UpForm extends Component {

  constructor(props) {
    super(props)
    this.state = { rest: "null",id:null,username: "",password: "",email: "",phone: 0, btnform:"Add record"}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteTable = this.deleteTable.bind(this)
    // this.deleteRow = this.deleteRow.bind(this)
    // this.editRow = this.editRow.bind(this)
    // console.log("upform contructor is called")
    // console.log(this.props)

}
componentDidMount() {
  console.log("upform componentdidmount is called");
  // this.setState({st:this.props.deletedRow})

}

componentDidUpdate(){
  console.log("upform componentdidupdate is called");

    if(this.props.editedRow!== null){
      if(this.props.editedRow.status===true){
  
        this.setState({
          id:this.props.editedRow.obj.id,
          username: this.props.editedRow.obj.username,
          password: this.props.editedRow.obj.password,
          email: this.props.editedRow.obj.email,
          phone: this.props.editedRow.obj.phone,
          btnform: "Update"
        })
        this.props.edit1Row({status:false,obj:this.props.editedRow.obj})
      }

    }

}

handleChange(event) {
  
  let name= event.target.name

  if(name==='username'){
    this.setState({username: event.target.value})
  }
  if(name==='password'){
    this.setState({password: event.target.value})
  }
  if(name==='email'){
    this.setState({email: event.target.value})
  }  
  if(name==='phone'){
    this.setState({phone: event.target.value})
  }
}

async handleSubmit(event) {

    event.preventDefault();
    // console.log(event.target)
    let data ={
        username:this.state.username,
        password:this.state.password,
        email:this.state.email,
        phone:this.state.phone
    }
    let ax = {  $set:{
      username:this.state.username,
      password:this.state.password,
      email:this.state.email,
      phone:this.state.phone
    }
  }
    // console.log(this.state.rest)
    if(this.state.btnform === "Update"){
      let data1 ={
        id : this.state.id,
        obj : ax
    }
      fetch('http://localhost:5000/editform1', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data1)
    }).then(async response => {
              await response.json().then(message => {
                
              // this.props.onsubmit(message.state)
              console.log('message is this:'+ message.state)
              if(message.state===true){
                console.log("hello message")
                 this.props.submitForm(message.state)
              }
            })
        })
        
  }
  if(this.state.btnform !== "Update"){
    fetch('http://localhost:5000/upform', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
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
}

  deleteTable(){
    // console.log("delete of this ",this)
    fetch('http://localhost:5000/deltable', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({})
  }).then(response=>{
    response.json().then(item=>{
        // console.log(item.message)
        this.props.submitForm(item.state)
    })
  })
 
}
// editRow(){
 
//   let data = {
//     id:this.state.id,
//     obj:{username: this.state.username,
//       password: this.state.password,
//       email:this.state.email,
//       phone:this.state.phone}
//   }
//   console.log(data)

//   fetch('http://localhost:5000/editform1', {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then(response=>{
//   response.json().then(item=>{
//       // console.log(this.props.selectedRow)
//       // this.props.submitForm(item.message)
//   })
// })

// }
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
                          <input type="text" className="fadeIn second" name="username" placeholder="username" value = {this.state.username} onChange={this.handleChange}/>
                          <input type="password" className="fadeIn third" name="password" placeholder="password" value = {this.state.password} onChange={this.handleChange}/>
                          <input type="text" className="fadeIn third" name="email" placeholder="email" value = {this.state.email} onChange={this.handleChange}/>
                          <input type="Number" className="fadeIn third" name="phone" placeholder="phone" value = {this.state.phone} onChange={this.handleChange}/>
                          <input id="buttonform" type="submit" className="fadeIn fourth" value={this.state.btnform} />
                      </form>
                      <input type="submit" className="fadeIn fourth" value="Delete All" onClick={this.deleteTable} />
                      {/* <input type="submit" className="fadeIn fourth" value="Edit" onClick={this.editRow} />                     */}
                  </div>
              </div >
      );
    }
  }
  const mapStateToProps = (state)=>{
    // console.log(use + when primitive and when object use , )
    // let data= state.selectedRow
    
    console.log("upform mapstatetoprops ")
    return {
      editedRow:state.editedRow,
      // deletedRow:state.deletedRow,
      // submitForm1:state.submittedForm

    }
  };

export default connect(mapStateToProps,{submitForm:submitForm, edit1Row:edit1Row})(UpForm);
