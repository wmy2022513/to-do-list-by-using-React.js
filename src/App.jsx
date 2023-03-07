import {useState} from 'react';
import './App.css';
import Todo from './Todo';
import Navbar from "./components/Navbar";


function App() {
    const [todos, setTodos] = useState([
      { name: "Read a book", done: true},
      { name: "Write a blog", done:true},
      { name: "Make a video", done:true},
      { name: "Reply a comment", done:true},
    ]);

    const [todo, setToDo] = useState('');
    const handleClick = () => {
      if(!todo){
        return;
      }
      // const todo = 'Like this video';
      const newTodos = todos.concat([{name: todo, done: false}]);
      setTodos(newTodos);
      setToDo('');
   };

    const handleRemove = () => {

      const removeTodos = todos.filter((todos)=> todos.done !== true);
      setTodos(removeTodos);

 
    };

    const handleChange = (e) => {
      const todo = e.target.value;
      setToDo(todo);
      console.log({todo});

    }

    const toggleDone = (e , index) => {
      const newTodos = todos.map((todo, i) => {
        if(i !== index){
          return todo;
        }

        return { name: todo.name, done: !todo.done};
      });
      setTodos(newTodos);
    };

    const totalRemaining = todos.filter((todo) => {
      return todo.done === false;
    }).length;

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div><Navbar /></div>
      <div>TotalRemaining: {totalRemaining} </div>
      <div>
        <input type="text" onChange={handleChange} value={todo} />
          <button onClick={handleClick}>Add</button>
          <button onClick={handleRemove}>Delete</button>
      </div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <Todo todo={todo} onClick={(e) => toggleDone(e, i) }></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
