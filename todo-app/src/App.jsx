import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{title: "title", description: "desc"}])

  function addTodo(){
    setTodos([...todos, {title: "newTitle", description: "newDesc"}])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo(props){
  return (
    <div>
      <b>{props.title}</b><br />
      {props.description}
    </div>
  )
}

export default App