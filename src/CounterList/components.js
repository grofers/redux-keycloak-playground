import React from 'react';
import { Card, Button } from 'antd';
const Counter = ({
  increment,
  decrement,
  remove,
  value
}) => (
  <Card style={{ width: 350 }}>
    <h1>{value}</h1>
    <Button.Group>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button type="danger" onClick={remove}>Delete</Button>
    </Button.Group>
  </Card>
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
      <Button type="primary" onClick={() => onAdd()}>Add counter</Button>
    </div>
);
