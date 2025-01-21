import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 grid py-4 min-h-screen text-white">
      <Todo />
    </div>
  );
};

export default App;
