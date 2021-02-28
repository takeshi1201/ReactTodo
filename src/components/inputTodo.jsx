import React from "react";

const style = {
  width: "400px",
  backgroundColor: "aqua",
  margin: "10px",
  padding: "20px"
};

export const InputTodo = (props) => {
  const { TodoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODO入力"
        value={TodoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
