import React, {useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoHeader from './TodoHeader/TodoHeader';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed']

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <TodoHeader filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

