import {useContext, useReducer, useRef} from 'react'
import './App.css'
import Editor from "./components/Editor.tsx";
import type {Todo} from "./types.ts";
import TodoItem from "./components/TodoItem.tsx";
import * as React from "react";

type Action = {
  type: "CREATE";
  data: {
    id: number;
    content: string;
  }
} | {
  type: "DELETE";
  id: number;
}

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter(item => item.id !== action.id);
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

// 자식 컴포넌트에서 context로부터 dispatch를 바로 사용할 수 있도록 null 체크를 하는 커스텀 훅을 만들고
// 자식 컴포넌트에서 이 커스텀 훅을 사용
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다");
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text
      }
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id
    });
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
          <Editor />
          <div>
            {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
