import './ToDoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';

const ToDoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      // submit이벤트는 브라우저에서 새로고침을 발생시키므로 이를 방지하기 위한 코드
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="ToDoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default ToDoInsert;
