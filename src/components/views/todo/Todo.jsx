import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "../../redux/todo";
import TodoForm from "../../todo/TodoForm";
import TodoList from "../../todo/TodoList";
import './Todo.css';
function Todo() {
  const toDostate = useSelector(state => state.todos);
  const remove =(params)=> {
console.log(params)
  }
  console.log(toDostate)
  
const dispatch = useDispatch()

  const addTodo = (task) => {
    dispatch (addTodoAction(task));
  };

  const deleteTodo = (index) => {
    dispatch (deleteTodoAction(index));
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={toDostate} deleteTodo = {deleteTodo}  />
 
    
    </div>
  );
}

export default Todo;
