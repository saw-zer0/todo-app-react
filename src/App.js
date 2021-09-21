import React, { Component } from "react"
import {connect} from "react-redux"


import NewTaskForm from "./components/NewTaskForm"
import TaskList from "./components/TasksList"
import 'bootstrap/dist/css/bootstrap.min.css';

import {mapStateToProps, mapDispatchToProps} from "./utils";


class App extends Component {

  
  render() {

    const {todoList } = this.props
    return (
      <div className="container">
        <h1 className="text-center">Todo App</h1>
        <NewTaskForm/>
        <div className="row mx-auto my-3 w-75" style={{minHeight: "25vh"}}>
          <div className="col border border-2 m-3 bg-info">
            <h2 className="border border-3 m-3 bg-white">tasks</h2>
            <ul>
              {todoList
                .filter(task => !task.done)
                .map(task =>
                  <TaskList
                  task={task}
                  key={task.id}
                  />
                  )
                }
            </ul>
          </div>
          <div className="col border border-2 m-3 bg-success">
            <h2 className="border border-3 m-3 bg-white">completed</h2>
            <ul >
              {todoList
                .filter(task => task.done)
                .map(task =>
                  <TaskList
                  task={task}
                  key={task.id}
                  />
                  )
                }
            </ul>
          </div>
        </div>
      </div>
    )
    
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
