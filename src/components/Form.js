import React, {useEffect} from 'react'
import {v4 as uuidv4} from "uuid";
import './Form.css'


const Form = props => {
    const {input, setInput, todos, setTodos, editTodo, setEditTodo} = props
    const onInputChange = (event) => {
        this.setState({
            setInput: event.target.value
        })
        
    }

    const updateTodo = (title, id,completed) => {
        const newTodo = todos.map((todo) => 
        todo.id === id ? {title,id,completed} : todo
    )
    setTodos(newTodo);
    setEditTodo("")
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        }else{
            setInput("")
        }
    }, [setInput,editTodo]);

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(!editTodo) {
            setTodos([...todos, {id:uuidv4(), title:input, finished: false}]);
            setInput("");
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    }
        return(
            <>
           <form onSubmit={onFormSubmit}>
            <input type="text" placeholder='Enter a Task...' className='task-input' value={input} required 
            onChange={onInputChange}/> 
            <button className='make-button' type="submit"> Got it! </button>
           </form>
         
           </>
        )
}

export default Form;