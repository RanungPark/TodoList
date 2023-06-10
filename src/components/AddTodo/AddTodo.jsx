import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo.trim().length === 0) {
      return;
    }
    onAdd({id: uuidv4(), text: todo, status: 'active'})
    setTodo('')
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} placeholder='AddTodo' onChange={handleChange}/>
        <button type='submit'>Add</button>
      </form>
  );
}

