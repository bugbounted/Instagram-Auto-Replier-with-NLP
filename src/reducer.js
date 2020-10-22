// set the initialState which we defined in the stateProvider
export const initialState = {
    user: null,
};
export const actionTypes = {
    SET_USER: "SET_USER",
};

// state is what the datalayer lookslike
// action is what you want to do to the data layer
const reducer = (state, action) => {
    console.log(action)
    // Now we need to listen on the datalayer base on the action type
    switch (action.type) {
        case actionTypes.SET_USER:
            // when we get this, we want to UPDATE the datalayer
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
export default reducer;