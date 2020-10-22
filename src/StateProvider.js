import React, {createContext, useContext, useReducer} from 'react';

// Export the data layer(StateContext) where can u push info and pull 
// info from its children
export const StateContext = createContext();

export const StateProvider =({reducer, initialState, children}) => (
    // useReducer takes somekind of reducer and initialState. 
    // Reducer listens to any kind of action/event you shoot at the data layer
    // initialState is what the data layer will look like at the start
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* Children here is the app */}
        {children}
    </StateContext.Provider>
)
// This is the line of code for us to access the data layer
export const useStateValue=()=> useContext(StateContext)

// Creating a data layer throughout all your entire app
// so that you can acccess the data across the ENTIRE app
// instead of having to do props drilling and pass it here and there
// throughout your app