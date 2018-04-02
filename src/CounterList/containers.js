import {
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter
} from './actions';

import { CounterListComponenent } from './components';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    counters : state.counters
  });

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (index) => {
      dispatch(incrementCounter(index));
    },
    onDecrement: (index) => {
      dispatch(decrementCounter(index));
    },
    onDelete: (index) => {
      dispatch(removeCounter(index));
    },
    onAdd: () => {
      dispatch(addCounter());
    },
  };
};

export const CounterList = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CounterListComponenent);
