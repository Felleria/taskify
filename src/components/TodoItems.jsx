import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import deleteIcon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      onClick={() => toggle(id)}
      className="flex items-center my-3 gap-4 bg-gray-800 p-3 rounded-lg shadow-md cursor-pointer transition duration-200 hover:bg-gray-700"
    >
      {/* Toggle Icon and Text */}
      <div className="flex flex-1 items-center">
        <img
          className="w-6"
          src={isComplete ? tick : not_tick}
          alt={isComplete ? "Completed" : "Not completed"}
        />
        <p
          className={`ml-4 text-[17px] font-medium ${
            isComplete ? "text-gray-400 line-through" : "text-gray-200"
          }`}
        >
          {text}
        </p>
      </div>

      {/* Delete Icon */}
      <img
        onClick={(e) => {
          e.stopPropagation(); // Prevent parent click event from firing
          deleteTodo(id);
        }}
        src={deleteIcon}
        alt="Delete icon"
        className="w-5 h-5 cursor-pointer text-red-500 hover:text-red-600 transition duration-200"
      />
    </div>
  );
};

export default TodoItems;
