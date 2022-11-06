import React, { useRef, useEffect, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // 랜더 될때마다 실행 -> email, password에서 password에 포커스가 맞춰짐(최신에 랜더된 컴포넌트기 때문에)
  //   useEffect(() => {
  //     inputRef.current.forcus();
  //   }, []);
  // 이 문제를 개선
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
