import './ToDoInsert.scss';
import { MdAdd } from 'react-icons/md';

const ToDoInsert = () => {
  return (
    <form className="ToDoInsert">
      <input placeholder="할 일을 입력하세요"></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default ToDoInsert;
