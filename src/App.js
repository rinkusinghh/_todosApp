// Components;
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TodosList } from './components/TodosList';
import { AddTodosItems } from './components/AddTodosItems';
import { About } from './components/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {

  let initTodo;
  if (localStorage.getItem('todosList') === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem('todosList'));
  }

  const [todosList, setTodosList] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todosList));
  }, [todosList])

  // Deleting functionality;
  const onDelete = (passTodosListItems) => {
    // console.log("delete items, passTodosListItems")
    setTodosList(todosList.filter((e) => {
      return e !== passTodosListItems;
    }))

    // Add localStorage;
    localStorage.setItem('todosList', JSON.stringify(todosList));
  }

  // Adding functionality;
  const addTodoItem = (title, notes) => {
    // console.log(title, notes)

    let sno;
    if (todosList.length === 0) {
      sno = 1;
    } else {
      sno = todosList[todosList.length - 1].sno + 1;
    }

    const storeTodo = {
      sno: sno,
      title: title,
      notes: notes,
    }
    setTodosList([...todosList, storeTodo]);
    // console.log(storeTodo)

    // Add localStorage;
    localStorage.setItem('todosList', JSON.stringify(todosList));
  }

  return (
    <>
      <Router>
        <Header title={"Todo-App"} searchBarToggler={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodosItems passAddTodoItem={addTodoItem} />
                <TodosList passTodosList={todosList}
                  passOnDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
