import { useState } from "react"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  function toggleTask(id){
        setTasks(tasks.map((task) => task.id === id ? {...task, done: !task.done} : task))
      }
  function removeTask(id){
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="app-container">
      <h1 className="app-title">My Tasks</h1>
      <div className="input-area">
      <input
        className="task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button
          className="add-button"
          onClick={() => {
            setTasks([...tasks, { id: Date.now(), text: text, done: false}]);
            setText("");
            }}
            >
            Add
            </button>
      </div>
       <ul className="task-list">
        {tasks.map((task) =>(
            <li key={task.id} 
            className={task.done ? "task-item done" : "task-item"}
            onClick={() => toggleTask(task.id)}>
              {task.text}
              <button className="remove-button"
              onClick={(e)=> {
                e.stopPropagation();
                removeTask(task.id);
              }}
              >
                X
              </button>
            </li>  
        ))}
      </ul>
      
    </div>
  )
}

export default App