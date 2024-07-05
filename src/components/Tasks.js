import React from 'react';
import { TbEditOff } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import './Tasks.css'

const Tasks = props => {
  const { todos, setTodos, setEditTodo } = props

    const onEditTodo = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const onComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id){
                    return{ ...item,completed: !item.completed}
                }
                return item;
            })
        )
    }

    const onDelete = ({id}) => {
          setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
      {todos.map((todo) => (
        <li className="list" key={todo.id}>
          <button className='button-complete task-button' onClick={() => onComplete(todo)}>
        <TiTick size="20"/>
       </button>
          <input
            type="text"
            value={todo.title}
            className={`list-item ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <button className='button-edit task-button' onClick={() => onEditTodo(todo)}>
             <TbEditOff size="15"/>
          </button>
          <button className='button-delete task-button' onClick={() => onDelete(todo)}>
           <RxCrossCircled size="14"/>
          </button>
        </li>
      ))}
    </div>
  );
};

export default Tasks;