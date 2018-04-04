import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from "./actions";

function updateArrayIndex(array, updateIndex, updateCallback) {
  return array.map((item, index) => {
    if (index !== updateIndex) {
      return item;
    }
    return updateCallback(item);
  });
}

function addCounter(countersState) {
  return countersState.concat(0);
}

function removeCounter(countersState, index) {
  return [...countersState.slice(0, index), ...countersState.slice(index + 1)];
}

function incrementCounter(countersState, index) {
  return updateArrayIndex(countersState, index, item => item + 1);
}

function decrementCounter(countersState, index) {
  return updateArrayIndex(countersState, index, item => item - 1);
}

export const countersReducer = (countersState = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return addCounter(countersState);
    case REMOVE_COUNTER:
      return removeCounter(countersState, action.index);
    case INCREMENT_COUNTER:
      return incrementCounter(countersState, action.index);
    case DECREMENT_COUNTER:
      return decrementCounter(countersState, action.index);
    default:
      return countersState;
  }
};
