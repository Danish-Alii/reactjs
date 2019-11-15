//imports
import React, { Component } from "react";
import "./Update.css";
import { connect} from 'react-redux';
import { selectRow } from "../actions";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { formdata: null, st: false };
    this.fetchData = this.fetchData.bind(this);
    this.tableData = this.tableData.bind(this);
    this.selecting = this.selecting.bind(this);
    // console.log("update constructor is called");
    console.log(this.props)

  }
  componentDidMount() {
    console.log("update componentdidmount is called");
    this.fetchData();

  }
  componentDidUpdate(){
    console.log("update componentDidUpdate called");
      if(this.props.submitForm===true){
        this.fetchData();
      }
  }
 

   fetchData() {
     console.log("fetch data update")
    fetch("http://localhost:5000/upform1").then(response => {
      response.json().then(item => {
        this.setState({ formdata: item });
      });
    });
    // console.log(this.state.formdata)
  }


  async selecting(event){
    // dispatching action
    // console.log(this)
    this.props.selectRow(event.target.parentNode.id)
  }

  tableData() {
    console.log("table data is this one now")
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
          </tr>
        );
      });
    }
  }

  render() {
    console.log("render of update",this.props.submitForm)
    return (
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Employee <b>Details</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Username</th>
                  <th>password</th>
                  <th>email</th>
                  <th>phone</th>
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
    selectedRow: state.selectedRow,
    deletedRow:state.deletedRow,
    submitForm:state.submitForm
  }
};

export default connect(mapStateToProps,{selectRow:selectRow})(Update);
