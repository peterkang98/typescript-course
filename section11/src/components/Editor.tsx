import {useState} from "react";
import {useTodoDispatch} from "../App.tsx";


export default function Editor() {
  // 초기값을 기반으로 해당 타입의 값만 setText()의 인수로 넣을 수 있음 (제네릭)
  const [text, setText] = useState("");

  const dispatch = useTodoDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={onChangeInput}/>
      <button onClick={onClickButton}>추가</button>
    </div>
  );
};