import React from 'react';
import './TodoForm.css'

const TodoList = (props)=>{
    let {addEvent,getInputVal,userInput} = props;

    return(
            <form className="Form">
                    <input type="text"
                    placeholder="add your event"
                           onChange={getInputVal}
                           value={userInput} />
                    <button onClick={addEvent}
                            className="Form_btn">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>

            </form>
    );
}


export default TodoList;