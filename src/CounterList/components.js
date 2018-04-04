import React from "react";
import { Card, Button, List } from "antd";
const Counter = ({ increment, decrement, remove, value }) => (
  <Card>
    <h1>{value}</h1>
    <Button.Group>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button type="danger" onClick={remove}>
        Delete
      </Button>
    </Button.Group>
  </Card>
);

export const CounterListComponenent = ({
  counters,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd
}) => (
  <div>
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={counters.map((counter, index) => ({
        value: counter,
        key: index
      }))}
      renderItem={item => (
        <List.Item>
          <Counter
            key={item.key}
            value={item.value}
            increment={() => onIncrement(item.key)}
            decrement={() => onDecrement(item.key)}
            remove={() => onDelete(item.key)}
          />
        </List.Item>
      )}
    />
    <Button type="primary" onClick={() => onAdd()}>
      Add counter
    </Button>
  </div>
);
