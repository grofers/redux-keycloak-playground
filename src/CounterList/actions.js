// action types
export const ADD_COUNTER =  "ADD_COUNTER"
export const REMOVE_COUNTER =  "REMOVE_COUNTER"
export const INCREMENT_COUNTER =  "INCREMENT_COUNTER"
export const DECREMENT_COUNTER =  "DECREMENT_COUNTER"

// action creators
export const addCounter = () => ({ type: ADD_COUNTER });
export const removeCounter = (index) => ({ type: REMOVE_COUNTER, index: index})
export const incrementCounter = (index) => ({ type: INCREMENT_COUNTER, index: index})
export const decrementCounter = (index) => ({ type: DECREMENT_COUNTER, index: index})
