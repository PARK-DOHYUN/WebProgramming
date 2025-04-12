import { useState } from "react"
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextid = 3;

const initialTodos = [
    {id:0,title:'Buy milk', done:true},
    {id:1,title:'Eat tacos', done:false},
    {id:2,title:'Brew tea', done:false},
];

function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title){
        setTodos([
            ...todos,
            {
                id : nextid++,
                title: title,
                done: false
            }
        ]);
    }
    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t=>{
            if(t.id === nextTodo.id){
                return nextTodo;
            }else{
                return t;
            }
        }));
    }
    function handleDeleteTodo(todoId){
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return(
        <>
        <AddTodo onAddTodo={handleAddTodo}/>
        <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
        />
        </>
    );

}

export default TaskApp;