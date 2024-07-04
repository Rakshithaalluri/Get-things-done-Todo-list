import React from 'react';
import { TbEditOff } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import './Tasks.css'

const Tasks = ({ todos, setTodos, setEditTodo }) => {

    const handleEditTodo = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id){
                    return{ ...item,completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleDelete = ({id}) => {
          setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
      {todos.map((todo) => (
        <li className="list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list-item ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
           <TiTick size="24"/>
          </button>
          <button className='button-edit task-button' onClick={() => handleEditTodo(todo)}>
             <TbEditOff size="22"/>
          </button>
          <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
           <RxCrossCircled size="22"/>
          </button>
        </li>
      ))}
    </div>
  );
};

export default Tasks;