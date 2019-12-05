//imports
import React, { Component } from "react";
import * as styles from  "./Update.module.scss";
import { connect} from 'react-redux';
import { edit1Row } from "../../actions";
import { submitForm } from "../../actions";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { formdata: null, st: false };
    this.fetchData = this.fetchData.bind(this);
    this.tableData = this.tableData.bind(this);
    this.selecting = this.selecting.bind(this);
    this.deleteRow = this.deleteRow.bind(this)
    this.editRow = this.editRow.bind(this)
    // console.log("update constructor is called");
    console.log(this.props)

  }
  componentDidMount() {
    // console.log("update componentdidmount is called");
    this.fetchData();

  }
  componentDidUpdate(){
    // console.log("update componentDidUpdate called");
      if(this.props.submittedForm===true){
        this.fetchData();
        this.props.submitForm(false)
      }
  }
 

   fetchData() {
    //  console.log("fetch data update")
    fetch("http://localhost:5000/upform1").then(response => {
      response.json().then(item => {
        this.setState({ formdata: item });
      });
    });
    // console.log(this.state.formdata)
  }


  async selecting(event){
    // dispatching action
    // this.props.selectRow({obj1:event.target.parentNode, obj2:true})
    
  }
  editRow(st){
    console.log(st)
    let data = {
      status:true,
      obj:{
        id: st._id,
        username: st.username,
        password: st.password,
        email:st.email,
        phone:st.phone
      }
    }
    this.props.edit1Row(data)
  
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
  
  }
  deleteRow(st){
    // console.log("delete of this ",this)
    console.log("ssssssssssssssssssssssssssssssssss",st)
    fetch('http://localhost:5000/delform1', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({selectedRow :st._id})
  }).then(response=>{
    response.json().then(item=>{
        // console.log(item.message)
        this.props.submitForm(item.state)
    })
  })
 
}

  tableData() {
    // console.log("table data is this one now")
    if (this.state.formdata !== null) {
      return this.state.formdata.map((student, index) => {
        const { username, password, email, phone } = student;
        return (
          <tr id={student._id} key={student._id} onClick={this.selecting}>
            <td>{index}</td>
            <td>{username}</td>
            <td>{password}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <button onClick={()=>this.editRow(student)} style = {{margin:'10px'}}>edit</button>
            <button onClick={()=>this.deleteRow(student)} >delete</button>
          </tr>
        );
      });
    }
  }

  render() {
    // console.log("render of update")
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.tablewrapper}>
            <div className={styles.tabletitle}>
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Employee <b>Details</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className={styles.table+' '+styles.tablebordered}>
              <thead>
                <tr>
                  <th style = {{width:'10px'}}>Index</th>
                  <th style = {{width:'50px'}}>Username</th>
                  <th style = {{width:'50px'}}>password</th>
                  <th style = {{width:'80px'}}>email</th>
                  <th style = {{width:'60px'}}>phone</th>
                  <th style = {{width:'60px'}}>commands</th>
                </tr>
              </thead>
              <tbody>{this.tableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  // console.log(use + when primitive and when object use , )
  // console.log("update mapStateToProps",state)
  return {
    // editedRow: state.editedRow,
    // deleteRow:state.deletedRow,
    submittedForm:state.submittedForm
  }
};

export default connect(mapStateToProps,{submitForm:submitForm, edit1Row:edit1Row})(Update);
