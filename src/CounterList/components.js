import React from 'react';

const Counter = ({
  increment,
  decrement,
  remove,
  value
}) => (
  <li>
    <h1>{value}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={remove}>Delete</button>
  </li>
);

export const CounterListComponenent = ({
  counters,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
}) => (
    <div>
      <ul>
        { counters.map( (counter, index) =>
          <Counter
            key={index}
            value={counter}
            increment = {() => onIncrement(index)}
            decrement = {() => onDecrement(index)}
            remove = {() => onDelete(index)}
           /> )}
      </ul>
      <button onClick={() => onAdd()}>Add counter</button>
    </div>
);
