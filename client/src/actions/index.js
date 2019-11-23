//action creator

export const edit1Row = (id)=>{
    return {
        type:'ROW_EDITED',
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
