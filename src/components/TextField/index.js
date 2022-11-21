import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const placeholderModified = `${props.placeholder}`;

  //const[input, setInput] = useState('')
  //input read and setInput change

  const onInput = (event) => {
    props.onChanged(event.target.value);
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.input}
        onChange={onInput}
        required={props.required}
        placeholder={placeholderModified}
      />
    </div>
  );
};
export default TextField;
