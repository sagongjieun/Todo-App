import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './ToDoListItem.scss';
import cn from 'classnames';
import React from 'react';

const ToDoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="ToDoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
// React.memo를 사용함으로써 이 컴포넌트에서는
// todo, onRemove, onToggle이 바뀌지 않으면 리렌더링 되지 않아 컴포넌트 성능을 최적화시킴
export default React.memo(ToDoListItem);
