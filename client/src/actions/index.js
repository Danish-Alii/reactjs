//action creator

export const selectRow = (id)=>{
    return {
        type:'ROW_SELECTED',
        payload: id
    };
};
export const deleteRow = (state)=>{
    return {
        type:'ROW_DELETED',
        payload: state
    };
};
export const submitForm = (state)=>{
    return {
        type:'FORM_SUBMISSION',
        payload: state
    };
};
export const formData = (state)=>{
    return {
        type:'FORM_DATA',
        payload: state
    };
};
