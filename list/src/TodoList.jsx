import { use, useState } from "react";

function TodoList(){
    const[todos, setTodos] = useState([
        {id: 1, task: "React JS"},
        {id: 2, task: "jsx practice"},
        {id: 3, task: "Project work"}
    ]);

    function remove(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function add(){
        const newtask = {id: Date.now(), task: "New task " + (todos.length + 1)};
        setTodos([...todos, newtask]);
    }

    return(
        <div>
            <h2>Todo List</h2>
            <button onClick={add}>➕ Add</button>

            <ul>
                {todos.map((todo) => (
                    <li key ={todo.id}>
                        {todo.task}
                        <br/>
                        <button onClick={() => remove(todo.id)}>❌ Remove</button>
                    </li>
                ))}
            </ul>

            <p>Total task: {todos.length}</p>
        </div>
    );

}

export default TodoList;