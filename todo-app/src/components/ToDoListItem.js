import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './ToDoListItem.scss';
import cn from 'classnames';

const ToDoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="ToDoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default ToDoListItem;
