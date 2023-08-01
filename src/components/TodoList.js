import React, { useState, useEffect } from 'react';

function MemoApp() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleAddTodo = () => {
    setTodos(prevTodos => [...prevTodos, { id: todos.length + 1, content: 'New Todo' }]);
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleInputChange = event => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    if (inputText.length > 5) {
      setTodos(prevTodos => [...prevTodos, { id: todos.length + 1, content: inputText }]);
      setInputText('');
    }
  };

  return (
    <div id="main">
      <h2 id="item-jumbotron">jumbotron</h2>
      <ul id="todo-0">
        {todos.map(todo => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>

      <button id="add-todo-btn" onClick={handleAddTodo}>
        Add Todo
      </button>

      <div id="incr-cnt">
        <p>Count: {count}</p>
        <button id="incr-btn" onClick={handleIncrement}>
          {count}
        </button>
      </div>

      <div id="calc">
        <input
          id="skill-input"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text (min. 5 characters)"
        />
        <button id="skill-btn" onClick={handleAddItem}>
          1000000000
        </button>
      </div>
    </div>
  );
}

export default MemoApp;