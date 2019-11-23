import {combineReducers} from 'redux';


const editedRowReducer = (selectedRow = null, action) => {
   if (action.type ==='ROW_EDITED'){
       return action.payload;
   } 
   return selectedRow;
};
const deletedRowReducer = (deletedRow = null, action) => {
    if (action.type ==='ROW_DELETED'){
        return action.payload;
    } 
    return deletedRow;
 };
 const submitFormReducer = (submittedForm = null, action) => {
    if (action.type ==='FORM_SUBMISSION'){
        return action.payload;
    } 
    return submittedForm;
 };
//  const formDataReducer = (formData1 = null, action) => {
//     if (action.type ==='FORM_DATA'){
//         return action.payload;
//     } 
//     return formData1;
//  };

 
export default combineReducers({
    editedRow: editedRowReducer,
    deletedRow: deletedRowReducer,
    submittedForm:submitFormReducer,

});