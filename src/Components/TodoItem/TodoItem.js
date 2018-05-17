import React from 'react';
import './TodoItem.css';

const TodoItem = (props)=>{
    let {item, deleteItem} = props;
    return(
            <li className="TodoListItem card-1">
                <b>{item}</b>
                <i onClick={deleteItem} 
                className="fa fa-trash"
                aria-hidden="true">
                </i>
            </li>
    );
}


export default TodoItem;