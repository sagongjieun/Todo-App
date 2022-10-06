import { useCallback, useReducer, useRef, useState } from 'react';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';
import ToDoTemplate from './components/ToDoTemplate';

function createBulkTodos() {
  const array = [];

  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      chekced: false,
    });
  }

  return array;
}

// 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다는 장점을 가짐
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(createBulkTodos);
  // 세번째 파라미터로 초기상태를 만들어주는 함수를 넣어주면 컴포넌트가 첫 렌더링을 할 때만 함수가 호출됨
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용해서 변수에 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    // setTodos(
    //   (
    //     todos, // 특정 id를 가지고 있는 객체의 checked 값을 반전시킴
    //   ) =>
    //     todos.map((todo) =>
    //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //     ),
    // );
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <ToDoTemplate>
      {/* ToDoTemplate의 children */}
      <ToDoInsert onInsert={onInsert} />
      <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      {/* ToDoTemplate의 children */}
    </ToDoTemplate>
  );
}

export default App;
