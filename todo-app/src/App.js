import { useCallback, useRef, useState } from 'react';
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

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용해서 변수에 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos(
      (
        todos, // 특정 id를 가지고 있는 객체의 checked 값을 반전시킴
      ) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
    );
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
