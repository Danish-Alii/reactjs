//imports
import React, { Component } from "react";
import * as styles from "./UpForm.module.scss";
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
    this.state = { 
      rest: "null",
      id:null,
      username: "",
      password: "",
      email: "",
      phone: 0, 
      btnform:"Add record",
       textMessage:"",
       userCard:null, 
       Veg:null, 
       fruit:null,
       gender:null, 
       exdate:null,
       urlvalue:null,
       multifruit:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteTable = this.deleteTable.bind(this)
    // this.deleteRow = this.deleteRow.bind(this)
    // this.editRow = this.editRow.bind(this)
    // console.log("upform contructor is called")
    // console.log(this.props)

}
componentDidMount() {
  // console.log("upform componentdidmount is called");
  // this.setState({st:this.props.deletedRow})

}

componentDidUpdate(){
  // console.log("upform componentdidupdate is called");

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
  if(name==='textArea'){
    this.setState({textMessage:event.target.value})
  }
  if(name==='usercard'){
    this.setState({userCard:event.target.value})
  }
  if(name==='groups'){
    this.setState({Veg:event.target.value})
  }
  if(name==='altFruit'){
    this.setState({fruit:event.target.value})
  }
  if(name==='gender'){
    console.log(event.target.value)
    this.setState({gender:event.target.value})
  }
  if(name==='expiration'){
    this.setState({exdate:event.target.value})
  }
  if(name==='url'){
    this.setState({urlvalue:event.target.value})
  }
  if(name==='multi'){
    // let arr = Array.from(event.target.options).filter(option=>option.selected)
    console.log(Array.from(event.target.options))
    // this.setState({multifruit: arr})
    // this.setState({multifruit:event.target.value})
  }
  
}

async handleSubmit(event) {

    event.preventDefault();
    // console.log(event.target)
    let data ={
        username:this.state.username,
        password:this.state.password,
        email:this.state.email,
        phone:this.state.phone,
        textMessage:this.state.textMessage,
        userCard:this.state.userCard,
        fruit:this.state.fruit,
        gender:this.state.gender,
        exdate:this.state.exdate,
        urlvalue:this.state.urlvalue

    }
    let ax = {  $set:{
      username:this.state.username,
      password:this.state.password,
      email:this.state.email,
      phone:this.state.phone,
      textMessage:this.state.textMessage,
      fruit:this.state.fruit,
      gender:this.state.gender,
      exdate:this.state.exdate,
      urlvalue:this.state.urlvalue
      
    }
  }
    console.log(this.state)
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
              // console.log('message is this:'+ message.state)
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
    // console.log("render of upform")
      return (
        <div className={styles.formclass+' '+styles.fadeInDown}>
                  <div id={styles.formContent}>
                      {/* {this.props.selectedRow} */}
                      {/* <!-- Icon --> */}

                      <div className={styles.fadeIn+' '+styles.first}>
                          <img src="" id="icon" alt="User Icon" />
                      </div>
  
                      <form onSubmit={this.handleSubmit}>
                          <input type="text"  name="username" placeholder="username" value = {this.state.username} onChange={this.handleChange}/>
                          <input type="password"  name="password" placeholder="password" value = {this.state.password} onChange={this.handleChange}/>
                          <input type="email"  name="email" placeholder="email" value = {this.state.email} onChange={this.handleChange}/>
                          <input type="tel"  name="phone" placeholder="phone" value = {this.state.phone} onChange={this.handleChange}/>
                          
                          <p>
                            <label for="card">
                              <span>Card type:</span>
                            </label>
                            <select id="card" name="usercard" value={this.state.userCard} onChange={this.handleChange}>
                              <option value="visa">Visa</option>
                              <option value="mc">Mastercard</option>
                              <option value="amex">American Express</option>
                            </select>
                          </p>
                          
                          <ul>
                            <li>
                              <label for="title_1">
                                <input type="radio" id="title_1"  name="gender" value="Male"  onChange={this.handleChange} />
                                Male
                              </label>
                            <label style={{marginLeft:"10px"}} for="title_2">
                              <input type="radio" id="title_2"   name="gender" value="Female"  onChange={this.handleChange} />
                              Female
                            </label>
                          </li>
                        </ul>

                        <p>
                          <label for="date">
                            <span>Expiration date:</span>
                          </label>
                          <input type="date" id="date" name="expiration" value={this.state.exdate} onChange={this.handleChange}/>
                        </p>

                        <input type="search" id="search" name="search"  />
                        <br/> <br/>
                        <input type="url" id="url" name="url" value={this.state.urlvalue} onChange={this.handleChange}/>
                        <br/><br/>
                        <label htmlFor="">
                          Write Something:
                          <br/>
                          <textarea name="textArea" value={this.state.textMessage} onChange={this.handleChange} cols="30" rows="10">im a multi line text area field</textarea>
                        </label>
                        <br/><br/>
                        <select id="groups" name="groups" value={this.state.Veg} onChange={this.handleChange}>
                          <optgroup label="fruits">
                            <option>Banana</option>
                            <option selected>Cherry</option>
                            <option>Lemon</option>
                          </optgroup>
                          <optgroup label="vegetables">
                            <option>Carrot</option>
                            <option>Eggplant</option>
                            <option>Potato</option>
                          </optgroup>
                       </select>
                      <br/><br/>
                      <select id="multi" name="multi" multiple value={this.state.multifruit} onChange={this.handleChange}>
                        <option >Banana</option>
                        <option >Cherry</option>
                        <option >Lemon</option>
                      </select>
                      <br/><br/>

                      <label for="myFruit">What is your favorite fruit? (With fallback)</label>
                      <input type="text" id="myFruit" name="fruit" list="fruitList" />
                          
                      <datalist id="fruitList">
                        <label for="suggestion">or pick a fruit</label>
                        <select id="suggestion" name="altFruit" value={this.state.fruit} onChange={this.handleChange}>
                          <option>Apple</option>
                          <option>Banana</option>
                          <option>Blackberry</option>
                          <option>Blueberry</option>
                          <option>Lemon</option>
                          <option>Lychee</option>
                          <option>Peach</option>
                          <option>Pear</option>
                        </select>
                      </datalist>
                      
                      <br/><br/>
                      <label htmlFor="carrots">carrots</label>
                      <input type="checkbox" id="carrots" name="carrots" value="carrots" checked />
                      <label style={{marginLeft:"10px"}} htmlFor="potato">potato</label>
                      <input type="checkbox" id="potato" name="potato" value="potato" checked />

                      <br/><br/>

                      <fieldset>
                        <legend>What is your favorite meal?</legend>
                        <ul>
                          <li>
                            <label for="soup">Soup</label>
                            <input type="radio" id="soup" name="meal" value="soup" />
                          </li>
                          <li>
                            <label for="curry">Curry</label>
                            <input type="radio" id="curry" name="meal" value="curry" />
                          </li>
                          <li>
                            <label for="pizza">Pizza</label>
                            <input type="radio" id="pizza" name="meal" value="pizza" />
                          </li>
                        </ul>
                        </fieldset>

                        <br/><br/>
                          <input id="buttonform" type="submit" className={styles.fadeIn+' '+styles.fourth} value={this.state.btnform} />
                          <br/> <br/>
                      </form>
                      {/* <input type="submit" className="fadeIn fourth" value="Edit" onClick={this.editRow} />                     */}
                  </div>
              </div >
      );
    }
  }
  const mapStateToProps = (state)=>{
    // console.log(use + when primitive and when object use , )
    // let data= state.selectedRow
    
    // console.log("upform mapstatetoprops ")
    return {
      editedRow:state.editedRow,
      // deletedRow:state.deletedRow,
      // submitForm1:state.submittedForm

    }
  };

export default connect(mapStateToProps,{submitForm:submitForm, edit1Row:edit1Row})(UpForm);
