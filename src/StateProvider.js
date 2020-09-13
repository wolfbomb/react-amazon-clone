import React, { createContext, useReducer, useContext } from "react";

// This is Data layer used to track basket and user
export const StateContext = createContext();

// create the state Provider and wrap the app in the layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we access the data layer within a component
export const useStateValue = () => useContext(StateContext);