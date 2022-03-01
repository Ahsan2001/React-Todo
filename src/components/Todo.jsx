import React  from 'react'


// import react icons 
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";






const Ahsan = () => {


    const [todo, setTodo] = React.useState([]);
    const [userInput, setUserInput] = React.useState("");
    const [indexValue, setIndexValue] = React.useState("");
    const [editInput, setEditInput] = React.useState("");



    


    // Adding   with  validation 

    const addTodo = () => {
        if (userInput == "" ) {
            alert("Name must be filled out");
            return false;
        }
        else{
            todo.push(userInput);
            setTodo([...todo]);
            setUserInput("");
        }
    }

    // delete Complete List 
    const removeAll = () => {
        setTodo([]);
    }

    // delete one list
    const deleteTodo = (index) => {
        todo.splice(index , 1 );
        setTodo([...todo]);
    }


    // edit input 
    const editTodo = (index) => {
        setIndexValue(index)
    }

    // Update Function
    const update = () => {
        todo.splice(indexValue, 1, editInput);
        setTodo([...todo]);
        setIndexValue("");
        setEditInput("");
    }





    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="inner-wrap-main">
                        <h1>TODO APPLICATION BY M.AHSAN SHAIKH</h1>
                        <div className="input-field-main">
                            <input className="form-control"  value={userInput} placeholder='Enter Todo' onChange={(e) => setUserInput(e.target.value)} />
                            <button className="Add-btn" onClick={addTodo}>Add</button>
                            <button className="Remove-btn" onClick={removeAll}>Remove</button>
                        </div>
                        <ul className='todo-listing'>
                            {todo.map((value, index) => {
                                return index === indexValue ?  
                                (
                                    <div className="inner-input"  key={index}>
                                         <input className="form-control" value={editInput} placeholder='Edit Previous Value' onChange={(e) => setEditInput(e.target.value)} />
                                         <button className="Add-btn" onClick={update}>Update Now</button>
                                    </div>
                                )
                                :
                                (
                                    <div className="inner-input"  key={index}>
                                        <li>{value}</li>
                                        <button className="edit-btn" onClick={ () => editTodo(index) } > <BiEdit /> </button>
                                        <button className="delete-btn" onClick={ () => deleteTodo(index) }>  <AiFillDelete /> </button>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="copywrite-line">
                        <p>  Copyright © SNTECHSTUDIO.COM  &nbsp; - &nbsp;  All Rights Reserved 2022 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ahsan

















