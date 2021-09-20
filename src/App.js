import React, { Component } from "react"
import NewTaskForm from "./components/NewTaskForm"
import TaskList from "./components/TasksList"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      inputValue: ""
    }
    this.updateInputField = this.updateInputField.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
    this.addToList = this.addToList.bind(this)
    this.removeFromList = this.removeFromList.bind(this)
  }

  addToList(e) {
    e.preventDefault()
    const task = {
      id: this.state.todoList.length + 1,
      title: e.target[0].value,
      done: false
    }
    this.setState({
      todoList: [...this.state.todoList, task],
      inputValue: ""
    })
  }

  removeFromList(e, taskid) {
    e.preventDefault()
    taskid--;
    let tempTodo = this.state.todoList
    tempTodo.splice(taskid, 1)
    this.setState({
      todoList: tempTodo
    })
  }

  updateCheckbox(e) {
    const taskid = e.target.getAttribute("taskid")
    let tempTodo = this.state.todoList
    tempTodo[taskid - 1].done = e.target.checked
    this.setState({
      todoList: tempTodo
    })
  }

  updateInputField(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Todo App</h1>
        <NewTaskForm
          addToList={this.addToList}
          inputValue={this.state.inputValue}
          updateInputField={this.updateInputField}
        />
        <div className="row mx-auto my-3 w-75">
          <div className="col border border-2 m-3 ">
            <h2>tasks</h2>
            <ul>
              {this.state.todoList
                .filter(task => !task.done)
                .map(task =>
                  <TaskList
                    task={task}
                    updateCheckbox={this.updateCheckbox}
                    removeFromList={this.removeFromList}
                    key={task.id}
                  />
                )
              }
            </ul>
          </div>
          <div className="col border border-2 m-3">
            <h2>completed</h2>
            <ul >
              {this.state.todoList
                .filter(task => task.done)
                .map(task =>
                  <TaskList
                    task={task}
                    updateCheckbox={this.updateCheckbox}
                    removeFromList={this.removeFromList}
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

export default App;
