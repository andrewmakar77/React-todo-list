import React, { Component } from 'react';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoItem from './Components/TodoItem/TodoItem'
import Search from './Components/Search/Search'
import Datebar from './Components/DateBar/DateBar'

class App extends Component {

  state={
    items :[],
    userInput:'',
    userSearch:''
  }

  userSearchValHandler=(e)=>{
    this.setState({
      userSearch:e.target.value
    })
    console.log(this.state.userSearch);
  }

  deleteSearchInputHandler= () =>{
    console.log("delete");
  }


  addEventHandler=(e,input)=>{
    e.preventDefault();
    let itemsStorage = JSON.parse(localStorage.getItem("items")) || [];
    itemsStorage.push(input);
    localStorage.setItem("items", JSON.stringify(itemsStorage));
    let newItems = [...this.state.items];
    if(input){
      newItems.push(input);
      this.setState({
        items:newItems,
        userInput:''
      })
    }
    else{
      alert("Please enter some text!");
    }
  }


  getInputValHandler=(e)=>{
    let eventItem = e.target.value;
    this.setState({
      userInput:eventItem
    })
  }

  deleteEventItemHandler=(index)=>{
    let itemsFromStorage = JSON.parse(localStorage.getItem("items"));
    itemsFromStorage.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
    let newItems = [...this.state.items];
    newItems.splice(index,1);
    this.setState({
      items:newItems
    })
  }


  componentDidMount(){
    let itemsFromStorage = JSON.parse(localStorage.getItem("items"));
    if(itemsFromStorage){
      this.setState({
        items:itemsFromStorage
      })
    }
    else{
      this.setState({
        items:this.state.items
      })
    }
  }


  render() {

    let itemsList = this.state.items.map((item,index)=>{
      return <TodoItem item={item}
                       key={index}
                       deleteItem={()=>this.deleteEventItemHandler(index)}/>
  });

    let showEventsItem = (<h2 className="TodoList_emptyTitle">
                            Add some events to list!
                          </h2>)
    if(this.state.items.length){
      showEventsItem = itemsList
    }

    return (
        <div className="TodoList">
            <header className="TodoListHeader">
              <Search
              userSearchVal={this.userSearchValHandler}
              deleteSearchInput={this.deleteSearchInputHandler} />
              <Datebar />
            </header>
            <main className="TodoListMain">
              <ul>
                  {showEventsItem}
              </ul>
            </main>
            <footer className="TodoListFooter">
            <TodoForm addEvent={(e)=>this.addEventHandler(e,this.state.userInput)}
                      getInputVal={this.getInputValHandler}
                      userInput={this.state.userInput}/>
            </footer>
        </div>
    );
  }
}

export default App;
