import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
      "Read a book",
      "Write a blog",
      "Make a video",
      "Reply a comment",
    ]);

    const [todo, setToDo] = useState('');
    const handleClick = () => {
      if(!todo){
        return;
      }
      // const todo = 'Like this video';
      const newTodos = todos.concat([todo]);
      setTodos(newTodos);
      setToDo('');
   };

    const handleChange = (e) => {
      const todo = e.target.value;
      setToDo(todo);
      console.log({todo});

    }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>
        <input type="text" onChange={handleChange} value={todo} />
          <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
