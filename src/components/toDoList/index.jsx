import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TodoList.css";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((todos) => [...todos, newTodo]);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Add a new to-do item"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="button is-primary" type="submit">
          Add
        </button>
      </form>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {todos.map((todo, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {todo}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ToDoList;
