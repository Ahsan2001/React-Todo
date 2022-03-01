import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    // const [indexValue, setIndexValue] = useState("");
    // const [editInputValue, setEditInputValue] = useState("");


    const addtodo = () => {
        todo.push(inputValue);
        setTodo([...todo]);
        setInputValue("");
    };

    const deleteAll = () => {
        setTodo([]);
    };

    const deleteTodo = (ind) => {
        todo.splice(ind, 1);
        setTodo([...todo]);
    };

    // const editTodo = (ind) => {
    //     setIndexValue(ind);
    // };

    // const updateValue = () => {
    //     todo.splice(indexValue, 1, editInputValue);
    //     setTodo([...todo]);
    //     setIndexValue("");
    //     setEditInputValue("");
    // };
    console.log("todo", todo);
    return (
        <div>
            <h1>  TODO LIST  </h1>
            <div>
                <input type="text" value={inputValue} placeholder="ENTER TODO..." onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={addtodo}>  ADD TODO  </button>
                <button onClick={deleteAll}>  DELETE TODO  </button>
            </div>

            <section className="container">
                {todo.map((value, index, array) => {
                    return(
                    // return index === indexValue ? (
                    //     <>
                    //         <input key={index} placeholder="edit value" value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)} />
                    //         <button onClick={updateValue}>  update  </button>
                    //     </>
                    // ) : (
                        <div key={index}>
                            <li>{value} </li>
                            <span onClick={() => deleteTodo(index)}> <AiFillDelete />  </span>
                            {/* <span onClick={() => editTodo(index)}> <BiEdit /> </span> */}
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Todo;
