import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux"
import {Provider} from "react-redux"


const todoReducer = (state, action) => {
  let tempTodo = [];
  switch (action.type) {

    case "UPDATE_INPUT_FIELD":
      return {...state, inputValue: action.e.target.value};

    case "UPDATE_CHECKBOX":
      const taskid = action.taskid;
      const todo = JSON.parse(JSON.stringify(state.todoList));//make a hard copy, todo=state.todoList only makes soft copy
      todo[taskid - 1].done = action.e.target.checked;
      return {...state, todoList: todo};

    case "ADD_TO_LIST":
      action.e.preventDefault()
      const task = {
        id: state.todoList.length + 1,
        title: action.e.target[0].value,
        done: false
      };
      tempTodo = [...state.todoList, task]
      return {...state, todoList: tempTodo, inputValue: ""}

    case "REMOVE_FROM_LIST":
      tempTodo = JSON.parse(JSON.stringify(state.todoList));
      tempTodo.splice(action.taskid - 1 ,1)
      return {...state, todoList:tempTodo}

    default:
      return state;
  }
}

const store = createStore(todoReducer, {
  todoList: [],
  inputValue: ""
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
