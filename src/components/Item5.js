// Item.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

const Item5 = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    if (!todo.done) {
      dispatch(deleteTodo(todo.id));
    }
  };

  return (
    <tr style={{ textDecoration: todo.done ? 'line-through' : 'none'  }}>
      <td>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleToggle}
      
        />
      </td>
      <td>{todo.text}</td>
      <td>
        {!todo.done && (
          <button  style={{backgroundColor:'green'}} onClick={handleDelete}>Delete</button>
        )}
      </td>
    </tr>
  );
};

export default Item5;
