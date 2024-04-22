// List.js
import React from 'react';
import { useSelector } from 'react-redux';
import Item5 from './Item5';

const List5 = () => {
  const todos = useSelector(state => state.todos);

  return (
    <table>
      <tbody>
        {todos.map(todo => (
          <Item5 key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
};

export default List5;
