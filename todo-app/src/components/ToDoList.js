import ToDoListItem from './ToDoListItem';
import './ToDoList.scss';

const ToDoList = () => {
  return (
    <div className="ToDoList">
      <ToDoListItem />
      <ToDoListItem />
      <ToDoListItem />
    </div>
  );
};

export default ToDoList;
