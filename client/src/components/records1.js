//imports
import React, { Component } from "react";
import UpForm from "./UpForm";
import Update from './Update'
import { connect} from 'react-redux';
// import { selectSong } from "../actions";

class records1 extends Component {
  constructor(props) {
    super(props);
    this.state = {st: false };
    // this.fetchData = this.fetchData.bind(this);
    // this.tableData = this.tableData.bind(this);
    // this.selecting = this.selecting.bind(this);
    // console.log("records1 constructor is called");
    // console.log(this.props)
  }

  componentDidMount() {
    console.log("records1 componentdidmount is called");
    // this.setState({st:this.props.deletedRow})
  }
 
  componentDidUpdate(){
    console.log("records1 componentdidupdate is called");
  }

//   onSearchSubmit = term => {
//     this.setState({ st: term });
//     if (this.state.st !== false) {
//       console.log("yes st is not false: " + this.state.st);
//       this.fetchData();
//     }
//   };

//   fetchData() {
//     fetch("http://localhost:5000/upfornggnm1").then(response => {
//       response.json().then(item => {
//         this.setState({ formdata: item });
//       });
//     });
//     // console.log(this.state.formdata)
//   }


//   async selecting(event){
//     // this.setState({dd:event.target.parentNode.id})
//     // dispatching action
//     this.props.selectSong(event.target.parentNode.id)
//   }

//   tableData() {
//     if (this.state.formdata !== null) {
//       return this.state.formdata.map((student, index) => {
//         const { username, password, email, phone } = student;
//         return (
//           <tr id={student._id} key={student._id} onClick={this.selecting}>
//             <td>{index}</td>
//             <td>{username}</td>
//             <td>{password}</td>
//             <td>{email}</td>
//             <td>{phone}</td>
//           </tr>
//         );
//       });
//     }
//   }

  render() {
    console.log("render of records1")
    return (
        <div>
            <UpForm />
            <Update />
        </div>
    );
  }
}
const mapStateToProps = (state)=>{
  // console.log(use + when primitive and when object use , )
  // console.log("selecting mapstatetoprops ",state)
  return {
    // submitForm1:state.submittedForm

  }
};


 
export default connect(mapStateToProps)(records1);
