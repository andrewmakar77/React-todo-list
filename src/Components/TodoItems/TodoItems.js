import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoItems = ({items,userSearch,deleteItem}) =>{
    let itemsList = items.filter(item=>{
        return item.toLowerCase().includes(userSearch.toLowerCase())
      })
        .map((item,index)=>{
        return <TodoItem item={item}
                         key={index}
                         deleteItem={()=>deleteItem(index)}/>
    });
  
      let noEvents = (<h2 className="TodoList_emptyTitle">
                              Add some events to list!
                            </h2>)

      if(!items.length){
        itemsList = noEvents
      }

      return(
          <ul>
              {itemsList}
          </ul>
      )

}

export default TodoItems;