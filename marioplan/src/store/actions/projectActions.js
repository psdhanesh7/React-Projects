export const createProject = (project) => {
    // return {
    //     type : 'ADD_PROJECT', 
    //     project : project
    // }
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'Dhanesh',
            authorLastName : "PS",
            authorId : 1234,
            createdAt : new Date()

        }).then(() => {
            dispatch({ type : 'CREATE_PROJECT', project : project});
        }).catch((err) => {
            dispatch({type : 'CREATE_PROJECT_ERROR', err });
        })
        
        
    }
}