import {combineReducers} from 'redux';


const selectedRowReducer = (selectedRow = null, action) => {
   if (action.type ==='ROW_SELECTED'){
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
 const submitFormReducer = (submitForm = null, action) => {
    if (action.type ==='FORM_SUBMISSION'){
        return action.payload;
    } 
    return submitForm;
 };
 const formDataReducer = (formData1 = null, action) => {
    if (action.type ==='FORM_DATA'){
        return action.payload;
    } 
    return formData1;
 };

 
export default combineReducers({
    selectedRow: selectedRowReducer,
    deletedRow: deletedRowReducer,
    submitForm:submitFormReducer,
    formData1:formDataReducer

});