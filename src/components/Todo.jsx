import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') {
      return; // Avoid adding empty tasks
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false, // For toggling completion status
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = ''; // Clear the input field after adding
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-black place-self-center w-11/12 max-w-md flex flex-col p-8 min-h-[550px] rounded-xl shadow-lg'>
      {/* Title */}
      <div className='flex items-center mt-7 gap-3'>
        <img className='w-10' src={todo_icon} alt="Todo Icon" />
        <h1 className='text-3xl font-bold text-white'>Get Shit Done!</h1>
      </div>

      {/* Input Box */}
      <div className='flex items-center my-6 bg-gray-700 rounded-full shadow-md'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder-gray-400 text-gray-200 text-lg'
          type='text'
          placeholder='Add a task...'
        />
        <button
          onClick={add}
          className='bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 w-32 h-14 text-white text-lg font-medium rounded-full shadow-md'
        >
          Add +
        </button>
      </div>

      {/* Todo List */}
      <div className='flex flex-col gap-4 mt-4'>
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;