import React, { Component } from 'react'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoItems from './Components/TodoItems/TodoItems'
import Search from './Components/Search/Search'
import Datebar from './Components/DateBar/DateBar'

class App extends Component {

  state = {
    items :[],
    userInput:'',
    userSearch:''
  }

  // Getting search value
  userSearchValHandler=(e)=>{
    if(this.state.items.length){
      this.setState({
        userSearch:e.target.value
      })
    }
    else{
      alert('Nothing to search')
    }
  }

  // Deleting seach valeue
  deleteSearchInputHandler= () =>{
    this.setState({
      userSearch:''
    })
  }

  // Adding value to list
  addEventHandler=(e,input)=>{
    e.preventDefault();

    // Adding value to LocalStorage
    let itemsStorage = JSON.parse(localStorage.getItem("items")) || [];
    if(input === '' || input === null){
      alert("Please enter some text!");
    }else{
      itemsStorage.push(input)
      localStorage.setItem("items", JSON.stringify(itemsStorage));
      let newItems = [...this.state.items];
      // Adding value to state
      newItems.push(input);
      this.setState({
        items:newItems,
        userInput:''
      })
    }

  }

  // Getting value from adding input
  getInputValHandler=(e)=>{
    this.setState({
      userInput:e.target.value
    })
  }

  // Deleting value from list
  deleteEventItemHandler=(index)=>{
    // Parse value from LocalStorage
    let itemsFromStorage = JSON.parse(localStorage.getItem("items"));
    // Deleting value from LocalStorage
    itemsFromStorage.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
    let newItems = [...this.state.items];
    // Deleting value from state
    newItems.splice(index,1);
    this.setState({
      items:newItems
    })
  }

  // Loading value to state from localStorage
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


  render(){
    return (
        // TodoList
        <div className="TodoList">
            {/* Searching block items and Datebar */}
            <section className="TodoListHeader">
              <Search
              userSearchVal={this.userSearchValHandler}
              userSearch={this.state.userSearch}
              deleteSearchInput={this.deleteSearchInputHandler} />
              <Datebar />
            </section>
            {/* Items block */}
            <section className="TodoListMain">
              <TodoItems  items={this.state.items}
                          userSearch={this.state.userSearch}
                          deleteItem={this.deleteEventItemHandler} />
            </section>
            {/* Adding form */}
            <section className="TodoListFooter">
            <TodoForm addEvent={(e)=>this.addEventHandler(e,this.state.userInput)}
                      getInputVal={this.getInputValHandler}
                      userInput={this.state.userInput}/>
            </section>
        </div>
    );
  }
}

export default App;
